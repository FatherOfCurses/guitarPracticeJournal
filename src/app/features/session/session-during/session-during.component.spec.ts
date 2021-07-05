import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDuringComponent } from './session-during.component';

describe('SessionRecordComponent', () => {
  let component: SessionDuringComponent;
  let fixture: ComponentFixture<SessionDuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDuringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test click finish button
  it('should navigate to session-after on completion', () => {
    component.finishSession();

  })
});
