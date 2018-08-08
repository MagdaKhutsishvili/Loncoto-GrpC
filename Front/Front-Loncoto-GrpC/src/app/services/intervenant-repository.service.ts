import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Intervenant } from '../metier/objet-intervenant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntervenantRepositoryService {

  private intervenantsSubject: BehaviorSubject<Array<Intervenant>>
  
  //injection du client
  constructor(private http: HttpClient){
    this.intervenantsSubject= new BehaviorSubject([]) ;

  }

public getIntervenantsAsObservable(): Observable <Array<Intervenant>> {
  return this.intervenantsSubject.asObservable();
}

  public refreshListe():void{
    // requete vers le serveur
    // il rapellera mon subscribe avec des donnees deja converties
    this.http.get<Array<Intervenant>>("http://localhost:3000/intervenants")
        .subscribe(data=>{
          this.intervenantsSubject.next(data)
        });

  }

  public findById(id:number):Observable<Intervenant>{
    return this.http.get<Intervenant>(`http://localhost:3000/intervenants/${id}`);
  }


  public deleteIntervenant(id:number) : void {
    this.http.delete(`http://localhost:3000/intervenants/${id}`)
    .subscribe(resp =>{
            this.refreshListe();
    });
  }
  public updateIntervenant(intervenant : Intervenant): void {
    this.http.put(`http://localhost:3000/intervenants/${intervenant.id}`, intervenant.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }

 

}
