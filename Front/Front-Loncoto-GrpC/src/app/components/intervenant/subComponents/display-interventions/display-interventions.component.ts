import { Component, OnInit } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';
import { Observable } from 'rxjs';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Page } from '../../../../metier/page';

@Component({
  selector: 'app-display-interventions',
  templateUrl: './display-interventions.component.html',
  styleUrls: ['./display-interventions.component.css']
})
export class DisplayInterventionsComponent implements OnInit {

  public interventions : Array<Intervention>;
public interventionsObservable : Observable<Page<Intervention>>

  constructor(private interventionRepository : InterventionsRepositoryService) { }

  ngOnInit() {
    this.interventionsObservable = this.interventionRepository.getInterventionsAsObservable();
    this.interventionRepository.refreshListe();
  }


}
