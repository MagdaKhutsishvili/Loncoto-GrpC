import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Intervention } from '../metier/objet-intervention';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InterventionRepositoryService {



  private interventionSubject: BehaviorSubject<Array<Intervention>>;


  constructor(private http : HttpClient) { 

    this.interventionSubject= new BehaviorSubject([]);


  }
  public getInterventionAsOsbervable(): Observable<Array<Intervention>>{
      return this.interventionSubject.asObservable();

  }



  public refreshListe():void{

    this.http.get<Array<Intervention>>("http://localhost:3000/interventions").subscribe(data=> {this.interventionSubject.next(data);
  });
  }

  public findById(id:number):Observable<Intervention>{
    return this.http.get<Intervention>(`http://localhost:3000/interventions/${id}`);


  }

  public removeIntervention(id:number):void{
    this.http.delete(`http://localhost:3000/interventions/${id}`)
                          .subscribe(resp => {this.refreshListe();
                          });


  }
}
