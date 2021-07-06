import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { SessionBeforeComponent } from './session-before.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Session} from '../../../models/session';
import {Router} from '@angular/router';
import {SessionAfterComponent} from '../session-after/session-after.component';
import {SessionDuringComponent} from '../session-during/session-during.component';

describe('SessionLogComponent', () => {
  let fixture: ComponentFixture<SessionBeforeComponent>;
  let component: SessionBeforeComponent;
  let router: Router;
  const testSession: Session = {
    date: '2021-01-01',
    practiceTime: 60,
    whatToPractice: 'Through the Fire and Flames',
    sessionIntent: 'Git gud'
  };

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ SessionBeforeComponent, SessionDuringComponent ],
      imports: [ReactiveFormsModule,
        RouterTestingModule.withRoutes([{path: 'sessionDuring', component: SessionDuringComponent}])],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    fixture = TestBed.createComponent(SessionBeforeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to session record on submit', async () => {
    component.onSubmit();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/sessionDuring');
  });

});
