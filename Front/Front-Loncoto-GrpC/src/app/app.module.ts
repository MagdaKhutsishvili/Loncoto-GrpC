import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {NgxPageScrollModule} from 'ngx-page-scroll';


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
    EditInterventionsOperateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPageScrollModule,
    RouterModule.forRoot([
      {path: 'home', component: VitrineComponent},
      
      {path: 'client', component: ClientComponent},
      {path: 'intervenant', component: IntervenantComponent},
      {path: 'operateur', component: OperateurComponent},
     // {path: 'edit/:id',component: EditKoComponent},
      {path: '', redirectTo: '/home', pathMatch:'full'}
    ])
  ],
  providers: [InterventionsRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
