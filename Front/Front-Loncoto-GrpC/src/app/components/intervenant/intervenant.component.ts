import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intervenant',
  templateUrl: './intervenant.component.html',
  styleUrls: ['./intervenant.component.css']
})
export class IntervenantComponent implements OnInit {

 
  public currentEditId : number;

  public constructor() {
    this.currentEditId = 0;
  }

  public editRequested(id: number) {
    console.log("recus demande edition localisation no " + id);
    this.currentEditId = id;
  }
  ngOnInit() {
  }
 
}
