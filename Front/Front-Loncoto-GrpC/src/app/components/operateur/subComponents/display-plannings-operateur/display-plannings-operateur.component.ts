import { Component, OnInit,ViewChild } from '@angular/core';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Intervention } from '../../../../metier/objet-intervention';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Subject, Subscription } from 'rxjs';
import { Evenement } from '../../../../metier/objet-evenement';
import { PlanningService } from '../../../../services/planning.service';


@Component({
  selector: 'app-display-plannings-operateur',
  templateUrl: './display-plannings-operateur.component.html',
  styleUrls: ['./display-plannings-operateur.component.css'],

})
export class DisplayPlanningsOperateurComponent implements OnInit {


  public interventionsSubject : Subject<Intervention[]>
  private interventionsSouscription : Subscription;
 
  public listevents:Intervention[];
  
 

  constructor(private interventionRepository: InterventionsRepositoryService, private eventsRepository:PlanningService) {
    //pour le ngfor
    this.interventionsSubject= new Subject<Intervention[]>();
 
   }

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  ngOnInit() {


    this.interventionsSouscription=this.interventionRepository.getInterventionsAsObservable().subscribe(p=>{
      // je reçois les nouvelles pages d'Interventions
      
      this.interventionsSubject.next(p.content);
      this.listevents=p.content;
      
     }
    );
    

     
      
  



    this.interventionRepository.refreshListe();
    


    this.calendarOptions = {
      
      
      editable: true,
      eventLimit: false,
      height:700,
      themeSystem: 'jquery-ui',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },



      events: this.listevents
      

    };
   
   

  }


  
}
  
  
    

