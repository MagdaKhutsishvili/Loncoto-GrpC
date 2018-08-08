import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Intervention } from '../metier/objet-intervention';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterventionRepositoryService {

  private interventionsSubject: BehaviorSubject<Array<Intervention>>
  
  //injection du client
  constructor(private http: HttpClient){
    this.interventionsSubject= new BehaviorSubject([]) ;

  }

public getInterventionsAsObservable(): Observable <Array<Intervention>> {
  return this.interventionsSubject.asObservable();
}

  public refreshListe():void{
    // requete vers le serveur
    // il rapellera mon subscribe avec des donnees deja converties
    this.http.get<Array<Intervention>>("http://localhost:3000/interventions")
        .subscribe(data=>{
          this.interventionsSubject.next(data)
        });

  }

  public findById(id:number):Observable<Intervention>{
    return this.http.get<Intervention>(`http://localhost:3000/interventions/${id}`);
  }


  public deleteIntervention(id:number) : void {
    this.http.delete(`http://localhost:3000/interventions/${id}`)
    .subscribe(resp =>{
            this.refreshListe();
    });
  }
  public updateIntervention(intervention : Intervention): void {
    this.http.put(`http://localhost:3000/interventions/${intervention.id}`, intervention.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }

 

}

