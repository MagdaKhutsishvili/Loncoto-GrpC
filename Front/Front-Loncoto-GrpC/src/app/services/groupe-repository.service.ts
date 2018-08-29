import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Groupe } from '../metier/objet-groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeRepositoryService {

  
  private groupeSubject: BehaviorSubject<Array<Groupe>>
  
  //injection du client
  constructor(private http: HttpClient){
    this.groupeSubject= new BehaviorSubject([]) ;

  }

public getIntervenantsAsObservable(): Observable <Array<Groupe>> {
  return this.groupeSubject.asObservable();
}

  public refreshListe():void{
    // requete vers le serveur
    // il rapellera mon subscribe avec des donnees deja converties
 
    this.http.get<Array<Groupe>>(`http://localhost:8080/loncogroup-c/groupeintervenant`).subscribe(data=> {this.groupeSubject.next(data);
  });
  }

  public findById(id:number):Observable<Groupe>{
    return this.http.get<Groupe>(`http://localhost:8080/loncogroup-c/groupeintervenant/${id}`);
  }


  public deleteIntervenant(id:number) : void {
    this.http.delete(`http://localhost:8080/groupeintervenant/${id}`)
    .subscribe(resp =>{
            this.refreshListe();
    });
  }
 /*public updateIntervenant(intervenant : Groupe): void {
    this.http.put(`http://localhost:8080/groupeintervenant/${groupeintervenant.id}`, groupeintervenant.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }
*/
 

}
