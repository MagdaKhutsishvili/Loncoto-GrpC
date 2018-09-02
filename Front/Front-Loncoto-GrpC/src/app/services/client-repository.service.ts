import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from '../metier/page';
import { Client } from '../metier/objet-client';

@Injectable({
  providedIn: 'root'
})
export class ClientRepositoryService {
  private clientsSubject : BehaviorSubject<Page<Client>>;
  private noPage : number;
  private taillePage : number;

  constructor(private http: HttpClient) {
    //on demarre avec une page vide 
    this.clientsSubject = new BehaviorSubject<Page<Client>>(Page.emptyPage<Client>());
    this.noPage=0;
    this.taillePage=5;

   }
   public setnopage(no:number){
     this.noPage=no;
     this.refreshListe();
   }

   public refreshListe():void{
     this.http.get<Page<Client>>(
     `http://localhost:8080//loncogroup-c/clients?page=${this.noPage}&size=${this.taillePage}`)
     .subscribe(p => {this.clientsSubject.next(p);
    });
    
   }

   public getClientspageAsObservable(): Observable<Page<Client>>{
     return this.clientsSubject.asObservable();
   }
}
