import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { Materiel } from '../../../../../../metier/objet-materiel';

import { MaterielRepositoryService } from '../../../../../../services/materiel-repository.service';

@Component({
  selector: 'app-edit-materiels-operateur',
  templateUrl: './edit-materiels-operateur.component.html',
  styleUrls: ['./edit-materiels-operateur.component.css']
})
export class EditMaterielsOperateurComponent implements OnInit,OnChanges {

  @Input() public editIdMateriel: number;
  public currentMateriel : Materiel;

  constructor(private MaterielRepository : MaterielRepositoryService) {


   }



   public saveMateriel() {
    
      if (this.currentMateriel.id > 0){
        let InterToSave = new Materiel(0,"",0,0,0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentMateriel);

        console.log(InterToSave);
        this.MaterielRepository.updateMateriel(InterToSave);
        this.currentMateriel = new Materiel(0,"",0,0,0);
      }
      else{
        let InterToSave = new Materiel(0,"",0,0,0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentMateriel);

        console.log(InterToSave);
        this.MaterielRepository.createMateriel(InterToSave);
        this.currentMateriel = new Materiel(0,"",0,0,0);
      }
 
    }


  public cancelMateriel() {
    this.currentMateriel = new Materiel(0,"",0,0,0);
  }

public removeMateriel(){

  this.MaterielRepository.removeMateriel(this.currentMateriel.id);
  this.currentMateriel=new Materiel(0,"",0,0,0);
}



  ngOnInit() {
    this.currentMateriel=new Materiel(0,"",0,0,0);
  }

  ngOnChanges(changes:any){
    
    if (this.editIdMateriel==0){
      this.currentMateriel=new Materiel(0,"",0,0,0);
    }
    else{
      
      this.MaterielRepository.findById(this.editIdMateriel).subscribe(Materiel=> { this.currentMateriel=Materiel;
      });
    }
  }



}
