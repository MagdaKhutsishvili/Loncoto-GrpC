import { Component, OnInit,ViewChild } from '@angular/core';
import { InterventionsRepositoryService } from '../../../../services/interventions-repository.service';
import { Intervention } from '../../../../metier/objet-intervention';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Evenement } from '../../../../metier/objet-event';
import { Intervenant } from '../../../../metier/objet-intervenant';
import { Subject, Subscription } from 'rxjs';
import { IntervenantRepositoryService } from '../../../../services/intervenant-repository.service';
import { Materiel } from '../../../../metier/objet-materiel';
import { MaterielRepositoryService } from '../../../../services/materiel-repository.service';
import { async } from 'q';


@Component({
  selector: 'app-display-plannings-operateur',
  templateUrl: './display-plannings-operateur.component.html',
  styleUrls: ['./display-plannings-operateur.component.css'],

})
export class DisplayPlanningsOperateurComponent implements OnInit {

  public intervenantsSubject : Subject<Intervenant[]>
  private intervenantsSouscription : Subscription;

  private listeintervenant: Intervenant[]=[];
public debutprev:Date;
public daterandom: Date;
public mois : number;

  public listevents: Evenement[]=[];
  public events = null
public listematos: Materiel[]=[];

public selectintervenant: Intervenant=new Intervenant(0,"","","","purple");
    public currentIntervention : Intervention;
    public materielsSubject : Subject<Materiel[]>
    private materielsSouscription : Subscription;

    
    constructor(private interventionRepository : InterventionsRepositoryService,private materielRepository: MaterielRepositoryService,private intervenantnRepository: IntervenantRepositoryService) {
      this.materielsSubject= new Subject<Materiel[]>();
      this.intervenantsSubject= new Subject<Intervenant[]>();
     }
   


 


  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  ngOnInit() {  
    this.debutprev=new Date(Date.now());



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
    this.listeintervenant=p.content;
  });

  this.intervenantnRepository.refreshListe();
this.interventionRepository.refreshListe();
this.materielRepository.refreshListe2();
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
 
  public genererEventsPreventives(){
    this.materielRepository.getMaterielsAsObservable2().subscribe(p=>{
      // je reçois les nouvelles pages d'Interventions
  
     this.listematos=p.content; 
    });


      for (let materiel of this.listematos  ){
        this.daterandom=new Date();
        this.daterandom.setDate(Math.random() *28+1);
        this.daterandom.setMonth( this.debutprev.getMonth());
        this.daterandom.setFullYear(this.debutprev.getFullYear());
       console.log(
          new Intervention(0,"","","Préventive","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, iusto est nemo earum velit ab"+ 
          "Voluptatibus incidunt architecto eius sapiente laboriosam aut dolores velit repellendus assumenda"+ 
          "tenetur! Hic, nisi necessitatibus!",materiel,
          this.listeintervenant[Math.floor((Math.random() * this.listeintervenant.length) )],
          "Intervention Preventive sur"+materiel.article.nom,this.daterandom.toLocaleDateString(),this.daterandom.toLocaleDateString(),"purple"));
  
  }
  

  }



  public consoledebutprev(){
    console.log(this.debutprev);
  }








}
  
    

