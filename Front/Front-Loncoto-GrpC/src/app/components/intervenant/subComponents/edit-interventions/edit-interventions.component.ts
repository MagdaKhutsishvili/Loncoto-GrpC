import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';


@Component({
  selector: 'app-edit-interventions',
  templateUrl: './edit-interventions.component.html',
  styleUrls: ['./edit-interventions.component.css']
})
export class EditInterventionsComponent implements OnInit {


 
  
  constructor() { }

  ngOnInit() {
    
  }/*
  ngOnChanges(changes:any){
    if (this.editId==0){
      this.currentIntervention=new Intervention(0,"rien","aucun",10.0);
    }
    else {
      this.interventionRepository.findById(this.editId).subscribe(intervention=>{
        this.currentIntervention=intervention;
      });
    }

  }

  public saveIntervention(){
    if (this.currentIntervention.id>0){
      let interventionToSave=new Intervention(0,"","",0);
      
      interventionToSave.copyfrom(this.currentIntervention);
      
      this.interventionRepository.updateLivre(livreToSave);
      this.currentLivre=new Livre(0,"rien","aucun",10.0);
    }
  }

}
*/
}