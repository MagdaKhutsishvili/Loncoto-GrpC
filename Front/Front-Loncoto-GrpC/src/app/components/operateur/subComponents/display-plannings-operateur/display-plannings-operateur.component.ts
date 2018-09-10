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
        right: 'month,agendaWeek,agendaDay,listMonth,'
      },
      events: data,

      
      resourceAreaWidth:0.4,
      resourceColumns: [
        {
          group: true,
          labelText: 'Building',
          field: 'building'
        },
        {
          labelText: 'Room',
          field: 'title'
        },
        {
          labelText: 'Occupancy',
          field: 'occupancy'
        }
      ],
      
   /*
      resources: [
        { id: 'a', building: '460 Bryant', title: 'Auditorium A', occupancy: 40 },
        { id: 'b', building: '460 Bryant', title: 'Auditorium B', occupancy: 40 },
        { id: 'c', building: '460 Bryant', title: 'Auditorium C', occupancy: 40 },
        { id: 'd', building: '460 Bryant', title: 'Auditorium D', occupancy: 40 },
        { id: 'e', building: '460 Bryant', title: 'Auditorium E', occupancy: 40 },
        { id: 'f', building: '460 Bryant', title: 'Auditorium F', occupancy: 40 },
        { id: 'g', building: '564 Pacific', title: 'Auditorium G', occupancy: 40 },
        { id: 'h', building: '564 Pacific', title: 'Auditorium H', occupancy: 40 },
        { id: 'i', building: '564 Pacific', title: 'Auditorium I', occupancy: 40 },
        { id: 'j', building: '564 Pacific', title: 'Auditorium J', occupancy: 40 },
        { id: 'k', building: '564 Pacific', title: 'Auditorium K', occupancy: 40 },
        { id: 'l', building: '564 Pacific', title: 'Auditorium L', occupancy: 40 },
        { id: 'm', building: '564 Pacific', title: 'Auditorium M', occupancy: 40 },
        { id: 'n', building: '564 Pacific', title: 'Auditorium N', occupancy: 40 },
        { id: 'o', building: '564 Pacific', title: 'Auditorium O', occupancy: 40 },
        { id: 'p', building: '564 Pacific', title: 'Auditorium P', occupancy: 40 },
        { id: 'q', building: '564 Pacific', title: 'Auditorium Q', occupancy: 40 },
        { id: 'r', building: '564 Pacific', title: 'Auditorium R', occupancy: 40 },
        { id: 's', building: '564 Pacific', title: 'Auditorium S', occupancy: 40 },
        { id: 't', building: '564 Pacific', title: 'Auditorium T', occupancy: 40 },
        { id: 'u', building: '564 Pacific', title: 'Auditorium U', occupancy: 40 },
        { id: 'v', building: '564 Pacific', title: 'Auditorium V', occupancy: 40 },
        { id: 'w', building: '564 Pacific', title: 'Auditorium W', occupancy: 40 },
        { id: 'x', building: '564 Pacific', title: 'Auditorium X', occupancy: 40 },
        { id: 'y', building: '564 Pacific', title: 'Auditorium Y', occupancy: 40 },
        { id: 'z', building: '564 Pacific', title: 'Auditorium Z', occupancy: 40 }
      ]*/
    };
  });
    

this.interventionRepository.refreshListe();
  }


}
  
  
    

