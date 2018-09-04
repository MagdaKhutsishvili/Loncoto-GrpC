import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Intervention } from '../metier/objet-intervention';
import { HttpClient } from '@angular/common/http';
import { Page } from '../metier/page';

@Injectable({
  providedIn: 'root'
})
export class InterventionsRepositoryService {

  private interventionsSubject: BehaviorSubject<Page<Intervention>>;
  
  private noPage : number;
  private taillePage : number;

  //injection du client
  constructor(private http: HttpClient){
    this.interventionsSubject= new BehaviorSubject<Page<Intervention>>(Page.emptyPage<Intervention>());
    this.noPage=0;
    this.taillePage=5;

  }

public getInterventionsAsObservable(): Observable <Page<Intervention>> {
  return this.interventionsSubject.asObservable();
}

  
 



   public setnopage(no:number){
     this.noPage=no;
     this.refreshListe();
   }

   public refreshListe():void{
     this.http.get<Page<Intervention>>(
     `http://localhost:8080//loncogroup-c/interventions?page=${this.noPage}&size=${this.taillePage}`)
     .subscribe(p => {this.interventionsSubject.next(p);
    });
    
   }




   public findById(id:number):Observable<Intervention>{
    return this.http.get<Intervention>(`http://localhost:8080/loncogroup-c/interventions/${id}`);


  }

  public removeIntervention(id:number):void{
    this.http.delete(`http://localhost:8080/loncogroup-c/interventions/remove/${id}`)
                          .subscribe(resp => {this.refreshListe();
                          });


  }
  public updateIntervention(intervention : Intervention): void {
    this.http.put(`http://localhost:8080/loncogroup-c/interventions/save/`, intervention.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }

  public createIntervention(intervention : Intervention): void {
    this.http.post(`http://localhost:8080/loncogroup-c/interventions/save/`, intervention.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }






}



