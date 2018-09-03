import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ChartsModule } from 'ng2-charts';
//import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { PaginationModule } from "ngx-bootstrap/pagination";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ScheduleModule} from 'primeng/schedule';
import { FullCalendarModule } from 'ng-fullcalendar';

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { OperateurComponent } from './components/operateur/operateur.component';
import { IntervenantComponent } from './components/intervenant/intervenant.component';
import { DisplayInterventionsDuclientComponent } from './components/client/subComponents/display-interventions-duclient/display-interventions-duclient.component';
import { SignalementNvProblemeComponent } from './components/client/subComponents/signalement-nv-probleme/signalement-nv-probleme.component';
import { DisplayInterventionsComponent } from './components/intervenant/subComponents/display-interventions/display-interventions.component';
import { DisplayPlanningsComponent } from './components/intervenant/subComponents/display-plannings/display-plannings.component';
import { EditInterventionsComponent } from './components/intervenant/subComponents/edit-interventions/edit-interventions.component';
import { EditPlanningsComponent } from './components/operateur/subComponents/edit-plannings/edit-plannings.component';
import { DisplayReferentielComponent } from './components/operateur/subComponents/display-referentiel/display-referentiel.component';
import { EditReferentielComponent } from './components/operateur/subComponents/edit-referentiel/edit-referentiel.component';



import { VitrineComponent } from './components/vitrine/vitrine.component';

import {DisplayInterventionsOperateurComponent} from './components/operateur/subComponents/display-interventions-operateur/display-interventions-operateur.component';
import { DisplayPlanningsOperateurComponent } from './components/operateur/subComponents/display-plannings-operateur/display-plannings-operateur.component';
import { EditInterventionsOperateurComponent } from './components/operateur/subComponents/edit-interventions-operateur/edit-interventions-operateur.component';
import { InterventionsRepositoryService } from './services/interventions-repository.service';
import { DisplayDashboardComponent } from './components/operateur/subComponents/display-dashboard/display-dashboard.component';
import { DisplayTableauClientComponent } from './components/client/subComponents/display-tableau-client/display-tableau-client.component';
import { DisplayTableauIntervenantComponent } from './components/intervenant/subComponents/display-tableau-intervenant/display-tableau-intervenant.component';
import { DisplayClientComponent } from './components/operateur/subComponents/display-referentiel/displays/display-client/display-client.component';
import { EditClientComponent } from './components/operateur/subComponents/display-referentiel/displays/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    OperateurComponent,
    IntervenantComponent,
    DisplayInterventionsDuclientComponent,
    SignalementNvProblemeComponent,
    DisplayInterventionsComponent,
    DisplayPlanningsComponent,
    EditInterventionsComponent,
    EditPlanningsComponent,
    DisplayReferentielComponent,
    EditReferentielComponent,
    VitrineComponent,
    DisplayInterventionsOperateurComponent,
    DisplayPlanningsOperateurComponent,
    EditInterventionsOperateurComponent,
    DisplayDashboardComponent,
    DisplayTableauClientComponent,
    DisplayTableauIntervenantComponent,
    DisplayClientComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPageScrollModule,
    ScheduleModule,
    FullCalendarModule,
    //BsDatepickerModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule, 
    PaginationModule.forRoot(),
    
    RouterModule.forRoot([
      {path: 'home', component: VitrineComponent},
      
      {path: 'client', component: ClientComponent},
      {path: 'client/interventions', component: DisplayInterventionsDuclientComponent },
      {path: 'intervenant', component: IntervenantComponent},
      {path: 'operateur', component: OperateurComponent},
      {path: 'operateur/interventions', component: DisplayInterventionsOperateurComponent},
      {path: 'operateur/planning', component: DisplayPlanningsOperateurComponent},
      {path: 'operateur/referentiel', component: DisplayReferentielComponent},

     // {path: 'edit/:id',component: EditKoComponent},
      {path: '', redirectTo: '/home', pathMatch:'full'}
    ])
  ],
  providers: [InterventionsRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
