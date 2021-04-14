import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbA11yModule,
  NbButtonModule,
  NbCardModule, NbInputModule,
  NbLayoutModule,
  NbListModule, NbMenuComponent,
  NbMenuModule,
  NbSidebarModule, NbStepperModule,
  NbThemeModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SessionLogComponent } from './features/session-log/session-log.component';
import {HeaderComponent} from './base/header/header.component';
import {FooterComponent} from './base/footer/footer.component';
import {SidebarComponent} from './base/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {routes} from '@nebular/auth';
import {SidebarModule} from './base/sidebar/sidebar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SessionLogComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
    NbButtonModule,
    NbA11yModule.forRoot(),
    NbStepperModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
