import { Component, OnInit, ViewChild } from '@angular/core';
import { Evenement } from '../../../../metier/objet-event';
import { Intervention } from '../../../../metier/objet-intervention';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';

@Component({
  selector: 'app-display-plannings',
  templateUrl: './display-plannings.component.html',
  styleUrls: ['./display-plannings.component.css']
})
export class DisplayPlanningsComponent implements OnInit {

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
    events: data,
    
 
  };
});
  

this.interventionRepository.refreshListe();
}


}
