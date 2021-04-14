import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionLogComponent } from './session-log.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('SessionLogComponent', () => {
  let fixture: ComponentFixture<SessionLogComponent>;
  let component: SessionLogComponent;
  let compiled: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLogComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLogComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display stepper on loading', () => {
    const sessionStepper = compiled.querySelector('[data-stepper]');
    expect(sessionStepper).toBeTruthy();
  });

  describe('Step 1', () => {
    it('should display time entry step on loading', () => {
      const timeEntryStep = compiled.querySelector('[data-step-1]');
      expect(timeEntryStep).toBeTruthy();
    });

    it('should disable the previous button for step 1',  () => {
      const previousButton = compiled.querySelector('[data-prev-button-1]');
      expect(previousButton.getAttributeNode('disabled')).toBeTruthy();
    });

    it('should display step 2 when Next clicked', () => {
      const whatToPractice = compiled.querySelector('[data-step-2]');
      expect(whatToPractice).toBeTruthy();
    });
  });

  describe('Step 2', () => {
    it('should display step 3 when Next clicked', () => {
      const sessionGoal = compiled.querySelector('[data-step-3]');
      expect(sessionGoal).toBeTruthy();
    });
  });


});
