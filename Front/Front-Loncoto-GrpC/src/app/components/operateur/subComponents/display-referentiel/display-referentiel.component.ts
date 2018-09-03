import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-referentiel',
  templateUrl: './display-referentiel.component.html',
  styleUrls: ['./display-referentiel.component.css']
})
export class DisplayReferentielComponent implements OnInit {

  public currentIdClient : number;

  

  public editClientRequested(id: number) {
    console.log("recus demande edition localisation no " + id);
    this.currentIdClient = id;
  }

  
  constructor() {
    //pour le ngfor
   
    this.currentIdClient = 0;
   }

  

  ngOnInit() {
   
  }

}



