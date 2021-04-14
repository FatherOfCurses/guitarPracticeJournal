import {NgModule} from '@angular/core';
import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbStepperModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SessionLogComponent} from './session-log.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SessionLogComponent,
  ],
  imports: [
    NbStepperModule,
    NbInputModule,
    NbLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    CommonModule,
    NbButtonModule
  ],
  providers: []
})
export class SessionLogModule { }
