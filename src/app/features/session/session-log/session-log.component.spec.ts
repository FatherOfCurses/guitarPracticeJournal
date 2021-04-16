import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionLogComponent } from './session-log.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Session} from '../../../models/session';
import {Router} from '@angular/router';
import {SessionRecordComponent} from '../session-record/session-record.component';
import * as path from 'path';

describe('SessionLogComponent', () => {
  let fixture: ComponentFixture<SessionLogComponent>;
  let component: SessionLogComponent;
  let compiled: Element;
  let router: Router;
  const testSession: Session = {
    date: '2021-01-01',
    practiceTime: 60,
    whatToPractice: 'Through the Fire and Flames',
    sessionIntent: 'Git gud'
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLogComponent, SessionRecordComponent ],
      imports: [ReactiveFormsModule,
        RouterTestingModule.withRoutes([{path: 'sessionRecord', component: SessionRecordComponent}])],
      providers: [RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    fixture = TestBed.createComponent(SessionLogComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to session record on submit', async () => {
    component.onSubmit();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/sessionRecord');
  });

});
