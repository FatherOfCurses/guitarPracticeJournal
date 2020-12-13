import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {NbCardModule, NbLayoutModule, NbListModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SessionLogComponent } from './features/session-log/session-log.component';

import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SessionLogComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatExpansionModule,
    MatCardModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
