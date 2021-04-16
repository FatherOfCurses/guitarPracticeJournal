import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SessionLogComponent } from './features/session/session-log/session-log.component';
import {SessionRecordComponent} from './features/session/session-record/session-record.component';


const routes: Routes = [
  {path: '' , component: LandingPageComponent},
  {path: 'session', component: SessionLogComponent},
  {path: 'sessionRecord', component: SessionRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
