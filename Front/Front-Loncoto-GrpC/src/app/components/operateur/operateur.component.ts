import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.css']
})
export class OperateurComponent implements OnInit {

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
