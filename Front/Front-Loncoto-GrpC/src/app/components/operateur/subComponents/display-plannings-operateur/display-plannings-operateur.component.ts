import { Component, OnInit,ViewChild } from '@angular/core';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Intervention } from '../../../../metier/objet-intervention';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Evenement } from '../../../../metier/objet-event';
import { Intervenant } from '../../../../metier/objet-intervenant';
import { Subject, Subscription } from 'rxjs';
import { IntervenantRepositoryService } from '../../../../services/intervenant-repository.service';


@Component({
  selector: 'app-display-plannings-operateur',
  templateUrl: './display-plannings-operateur.component.html',
  styleUrls: ['./display-plannings-operateur.component.css'],

})
export class DisplayPlanningsOperateurComponent implements OnInit {

  public intervenantsSubject : Subject<Intervenant[]>
  private intervenantsSouscription : Subscription;

  public listevents: Evenement[]=[];
  public events = null

public selectintervenant: Intervenant=new Intervenant(0,"","","","purple");
    public currentIntervention : Intervention;
  
    constructor(private interventionRepository : InterventionsRepositoryService,private intervenantnRepository: IntervenantRepositoryService) {
  
      this.intervenantsSubject= new Subject<Intervenant[]>();
     }
   


 


  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  ngOnInit() {
  this.intervenantsSubject= new Subject<Intervenant[]>();
    this.interventionRepository.getEvents().subscribe(data=>{
    

    this.calendarOptions = {
      
     
      editable: true,
      eventLimit: false,
      height:700,
      
      themeSystem: 'jquery-ui',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth,'
      },
      events: data,
    };
  });
    
 
  this.intervenantsSouscription=this.intervenantnRepository.getIntervenantsAsObservable2().subscribe(p=>{
    // je reçois les nouvelles pages d'Interventions
    this.intervenantsSubject.next(p.content);
    
  });

  this.intervenantnRepository.refreshListe();
this.interventionRepository.refreshListe();
  }



 


public loadevents(){
  this.selectintervenant=new Intervenant(0,"","","","purple");
  this.interventionRepository.getEvents().subscribe(data=>{
    
    this.events= data;   
  });
}

public eventbyintervenant(){
  this.events=[];
  
  console.log(this.selectintervenant.id);
 this.interventionRepository.getEventsbyIntervenant(this.selectintervenant.id).subscribe(data=>{
    
  this.events=data
      
    });
 
}
 
  
  



}
  
  
    

