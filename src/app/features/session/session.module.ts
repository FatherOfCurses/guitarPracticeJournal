import {NgModule} from '@angular/core';
import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbStepperModule, NbTableModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SessionLogComponent} from './session-log/session-log.component';
import {CommonModule} from '@angular/common';
import { SessionRecordComponent } from './session-record/session-record.component';

@NgModule({
  declarations: [
    SessionLogComponent,
    SessionRecordComponent,
  ],
  imports: [
    NbStepperModule,
    NbInputModule,
    NbLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    CommonModule,
    NbButtonModule,
    NbTableModule
  ],
  providers: []
})
export class SessionModule { }
