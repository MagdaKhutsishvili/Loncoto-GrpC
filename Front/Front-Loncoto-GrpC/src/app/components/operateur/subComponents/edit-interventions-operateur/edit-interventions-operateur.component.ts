import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';

import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';

@Component({
  selector: 'app-edit-interventions-operateur',
  templateUrl: './edit-interventions-operateur.component.html',
  styleUrls: ['./edit-interventions-operateur.component.css']
})
export class EditInterventionsOperateurComponent implements OnInit,OnChanges {

  @Input() public editId: number;
  public currentIntervention : Intervention;

  constructor(private InterventionRepository : InterventionsRepositoryService) {


   }

  ngOnInit() {
    this.currentIntervention=new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0);
  }

  ngOnChanges(changes:any){
    
    if (this.editId==0){
      this.currentIntervention=new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0);
    }
    else{
      this.InterventionRepository.findById(this.editId).subscribe(Intervention=> { this.currentIntervention=Intervention;
      });
    }
  }



}
