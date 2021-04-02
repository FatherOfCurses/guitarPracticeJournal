import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {NbCardModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SessionLogComponent } from './features/session-log/session-log.component';
import {BaseModule} from './base/base.module';
import {HeaderComponent} from './base/header/header.component';
import {FooterComponent} from './base/footer/footer.component';
import {SidebarComponent} from './base/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {routes} from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SessionLogComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatExpansionModule,
    MatCardModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
