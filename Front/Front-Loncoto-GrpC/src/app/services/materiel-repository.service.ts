import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Materiel } from '../metier/objet-materiel';
import { HttpClient } from '@angular/common/http';
import { Page } from '../metier/page';

@Injectable({
  providedIn: 'root'
})
export class MaterielRepositoryService {

  private materielsSubject: BehaviorSubject<Page<Materiel>>;
  
  private noPage : number;
  private taillePage : number;

  //injection du client
  constructor(private http: HttpClient){
    this.materielsSubject= new BehaviorSubject<Page<Materiel>>(Page.emptyPage<Materiel>());
    this.noPage=0;
    this.taillePage=3;

  }

public getMaterielsAsObservable(): Observable <Page<Materiel>> {
  return this.materielsSubject.asObservable();
}

  
 



   public setnopage(no:number){
     this.noPage=no;
     this.refreshListe();
   }

   public refreshListe():void{
     this.http.get<Page<Materiel>>(
     `http://localhost:8080//loncogroup-c/materiels?page=${this.noPage}&size=${this.taillePage}`)
     .subscribe(p => {this.materielsSubject.next(p);
    });
    
   }




   public findById(id:number):Observable<Materiel>{
    return this.http.get<Materiel>(`http://localhost:8080/loncogroup-c/materiels/${id}`);


  }

  public removeMateriel(id:number):void{
    this.http.delete(`http://localhost:8080/loncogroup-c/materiels/remove/${id}`)
                          .subscribe(resp => {this.refreshListe();
                          });


  }
  public updateMateriel(materiel : Materiel): void {
    this.http.put(`http://localhost:8080/loncogroup-c/materiels/save/`, materiel.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }

  public createMateriel(materiel : Materiel): void {
    this.http.post(`http://localhost:8080/loncogroup-c/materiels/save/`, materiel.toJson()).subscribe(resp =>{
              this.refreshListe();
    });
  }
}
