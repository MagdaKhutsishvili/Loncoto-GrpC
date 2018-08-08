import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';
import { Observable } from 'rxjs';
import { InterventionRepositoryService } from '../../../../services/interventions-repository.service';

@Component({
  selector: 'app-display-interventions-operateur',
  templateUrl: './display-interventions-operateur.component.html',
  styleUrls: ['./display-interventions-operateur.component.css']
})
export class DisplayInterventionsOperateurComponent implements OnInit {



  public lesinterventions: Array<Intervention>;
  public interventionsObservable: Observable<Array<Intervention>>;
  @Output() public editRequired: EventEmitter<number>=new EventEmitter<number>();;

  constructor(private repertoireIntervention: InterventionRepositoryService) { }

  ngOnInit() {
    this.interventionsObservable = this.repertoireIntervention.getInterventionAsOsbervable();
    this.repertoireIntervention.refreshListe();
  }

  public removeInter(id: number) {
    console.log(id);
    this.repertoireIntervention.removeIntervention(id);
  }

  public editInter(id: number) {
    this.editRequired.emit(id);

  }




}


