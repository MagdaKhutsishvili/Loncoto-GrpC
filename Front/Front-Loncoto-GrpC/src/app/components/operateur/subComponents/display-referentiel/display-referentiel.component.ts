import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-referentiel',
  templateUrl: './display-referentiel.component.html',
  styleUrls: ['./display-referentiel.component.css']
})
export class DisplayReferentielComponent implements OnInit {

  public currentIdClient : number;
  public currentIdIntervenant : number;

  

  public editClientRequested(id: number) {
    console.log("recus demande edition localisation no " + id);
    this.currentIdClient = id;
  }

  public editIntervenantRequested(id: number) {
 
    this.currentIdIntervenant = id;
  }

  constructor() {
    //pour le ngfor
   
    this.currentIdClient = 0;
    this.currentIdIntervenant = 0;
   }

  

  ngOnInit() {
   
  }

}



