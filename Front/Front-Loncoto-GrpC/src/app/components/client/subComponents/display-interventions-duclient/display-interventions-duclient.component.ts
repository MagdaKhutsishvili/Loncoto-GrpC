import { Component, OnInit } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';
import { Observable } from 'rxjs';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';

@Component({
  selector: 'app-display-interventions-duclient',
  templateUrl: './display-interventions-duclient.component.html',
  styleUrls: ['./display-interventions-duclient.component.css']
})
export class DisplayInterventionsDuclientComponent implements OnInit {
/*
  public interventions : Array<Intervention>;
public interventionsObservable : Observable<Array<Intervention>>
*/
  constructor(private interventionRepository : InterventionsRepositoryService) { }

  ngOnInit() {
    /*this.interventionsObservable = this.interventionRepository.getInterventionsAsObservable();
    this.interventionRepository.refreshListe();
  
*/
}
}
