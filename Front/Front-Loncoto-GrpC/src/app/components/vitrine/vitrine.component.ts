import { Component, OnInit, Input} from '@angular/core';

import { NgxSmartModalService } from 'ngx-smart-modal';
import { Subject, Subscription } from 'rxjs';

import { Intervenant } from '../../metier/objet-intervenant';
import { IntervenantRepositoryService } from '../../services/intervenant-repository.service';



@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  public intervenantsSubject : Subject<Intervenant[]>
  private intervenantsSouscription : Subscription;


  constructor(public ngxSmartModalService: NgxSmartModalService,private intervenantnRepository: IntervenantRepositoryService) {
    this.intervenantsSubject= new Subject<Intervenant[]>();
  }

  
  ngOnInit(){
    this.intervenantsSouscription=this.intervenantnRepository.getIntervenantsAsObservable2().subscribe(p=>{
       // je reçois les nouvelles pages d'Interventions
       this.intervenantsSubject.next(p.content);
       
     });
   
     this.intervenantnRepository.refreshListe();
   }

   essayerintervenant(){

    console.log(this.selectintervenant)
   }

 

 }