import { Component, OnInit} from '@angular/core';
import { Intervention } from '../../../../metier/objet-intervention';

import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Page } from '../../../../metier/page';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-display-interventions-operateur',
  templateUrl: './display-interventions-operateur.component.html',
  styleUrls: ['./display-interventions-operateur.component.css']
})
export class DisplayInterventionsOperateurComponent implements OnInit{



  public interventionsSubject : Subject<Intervention[]>
  private interventionsSouscription : Subscription;




  public totalItems:number;
  public currentPage : number;
  public taillePage : number;
  public currentIntervention : Intervention;
  public editIdIntervention: number;
  

  constructor(private interventionRepository: InterventionsRepositoryService) {
    //pour le ngfor
    this.interventionsSubject= new Subject<Intervention[]>();

   }


public pageChanged(event){
  this.interventionRepository.setnopage(event.page-1);
}
  ngOnInit() {
    this.interventionsSouscription=this.interventionRepository.getInterventionsAsObservable().subscribe(p=>{
      // je reçois les nouvelles pages d'Interventions
      this.interventionsSubject.next(p.content);
      this.totalItems=p.totalElements;
      this.currentPage=p.number+1;
      this.taillePage=p.size;
    });
   




    this.currentIntervention=new Intervention(0,"","","En Attente","",1,1,"","","");
    this.interventionRepository.refreshListe();
  }

  public details(id: number) {
    this.editIdIntervention=id;
    this.interventionRepository.findById(this.editIdIntervention).subscribe(Intervention=> { this.currentIntervention=Intervention;
    });
  }

  

  public saveIntervention() {
    
    if (this.currentIntervention.id > 0){
      let InterToSave = new Intervention(0,"","","En Attente","",1,1,"","","");
      
      // retransformation du modele/json du formulaire
      // en veritable objet Livre avec ses méthodes
      InterToSave.copyFrom(this.currentIntervention);

      console.log(InterToSave);
      this.interventionRepository.updateIntervention(InterToSave);
      this.currentIntervention = new Intervention(0,"","","En Attente","",1,1,"","","");
    }
    else{
      let InterToSave = new Intervention(0,"","","En Attente","",1,1,"","","");
      
      // retransformation du modele/json du formulaire
      // en veritable objet Livre avec ses méthodes
      InterToSave.copyFrom(this.currentIntervention);

      console.log(InterToSave);
      this.interventionRepository.createIntervention(InterToSave);
      this.currentIntervention = new Intervention(0,"","","En Attente","",1,1,"","","");
    }

  }


public cancelIntervention() {
  this.currentIntervention = new Intervention(0,"","","En Attente","",1,1,"","","");
}

public removeIntervention(){

this.interventionRepository.removeIntervention(this.currentIntervention.id);
this.currentIntervention=new Intervention(0,"","","En Attente","",1,1,"","","");
}




}







