import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionLogComponent } from './session-log.component';

describe('SessionLogComponent', () => {
  let fixture: ComponentFixture<SessionLogComponent>;
  let component: SessionLogComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display button for new session', () => {
    const compiled = fixture.nativeElement;
    const newSessionButton = compiled.querySelector('[data-new-session-button]');
    expect(newSessionButton).toBeTruthy();
  });
});
