import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { IntervenantRepositoryService } from '../../../../../../services/intervenant-repository.service';

import { Intervenant } from '../../../../../../metier/objet-intervenant';

@Component({
  selector: 'app-edit-intervenant-operateur',
  templateUrl: './edit-intervenant-operateur.component.html',
  styleUrls: ['./edit-intervenant-operateur.component.css']
})
export class EditIntervenantOperateurComponent implements OnInit {

  
  @Input() public editIdIntervenant: number;
  public currentIntervenant : Intervenant;

  constructor(private IntervenantRepository : IntervenantRepositoryService) {


   }



   public saveIntervenant() {
    
      if (this.currentIntervenant.id > 0){
        let InterToSave = new Intervenant(0,"","","");
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentIntervenant);

        console.log(InterToSave);
        this.IntervenantRepository.updateIntervenant(InterToSave);
        this.currentIntervenant = new Intervenant(0,"","","");
      }
      else{
        let InterToSave = new Intervenant(0,"","","");
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentIntervenant);

        console.log(InterToSave);
        this.IntervenantRepository.createIntervenant(InterToSave);
        this.currentIntervenant = new Intervenant(0,"","","");
      }
 
    }


  public cancelIntervenant() {
    this.currentIntervenant = new Intervenant(0,"","","");
  }

public removeintervenant(){

  this.IntervenantRepository.removeIntervenant(this.currentIntervenant.id);
  this.currentIntervenant=new Intervenant(0,"","","");
}



  ngOnInit() {
    this.currentIntervenant=new Intervenant(0,"","","");
  }

  ngOnChanges(changes:any){
    
    if (this.editIdIntervenant==0){
      this.currentIntervenant=new Intervenant(0,"","","");
    }
    else{
      this.IntervenantRepository.findById(this.editIdIntervenant).subscribe(Intervenant=> { this.currentIntervenant=Intervenant;
      });
    }
  }



}