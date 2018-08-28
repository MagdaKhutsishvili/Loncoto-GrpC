import { Component, OnInit,ViewChild } from '@angular/core';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Intervention } from '../../../../metier/objet-intervention';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';


@Component({
  selector: 'app-display-plannings-operateur',
  templateUrl: './display-plannings-operateur.component.html',
  styleUrls: ['./display-plannings-operateur.component.css'],

})
export class DisplayPlanningsOperateurComponent implements OnInit {










    public currentIntervention : Intervention;
  
    constructor(private InterventionRepository : InterventionsRepositoryService) {
  
  
     }
     public saveIntervention() {
    
      if (this.currentIntervention.id > 0){
        let InterToSave = new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0);
        
        // retransformation du modele/json du formulaire
        // en veritable objet Livre avec ses méthodes
        InterToSave.copyFrom(this.currentIntervention);
  
        this.InterventionRepository.updateIntervention(InterToSave);
        this.currentIntervention = new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0);
      }
 
    }
  public cancelIntervention() {
    this.currentIntervention = new Intervention(0,"1-1-1999","1-1-1999","rien","toi",0,0);
  }




  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  ngOnInit() {
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
      events: []
    };

  }


  
}
  
  
    

