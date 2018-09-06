import { Component, OnInit,ViewChild } from '@angular/core';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Intervention } from '../../../../metier/objet-intervention';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Evenement } from '../../../../metier/objet-event';


@Component({
  selector: 'app-display-plannings-operateur',
  templateUrl: './display-plannings-operateur.component.html',
  styleUrls: ['./display-plannings-operateur.component.css'],

})
export class DisplayPlanningsOperateurComponent implements OnInit {







  public listevents: Evenement[]=[];


    public currentIntervention : Intervention;
  
    constructor(private interventionRepository : InterventionsRepositoryService) {
  
  
     }
   



  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  ngOnInit() {

    this.interventionRepository.getEvents().subscribe(data=>{
    
    
    

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
      events: data
    };
  });
    

this.interventionRepository.refreshListe();
  }


}
  
  
    

