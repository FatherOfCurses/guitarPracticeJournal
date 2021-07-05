import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAfterComponent } from './session-after.component';

describe('SessionRecordComponent', () => {
  let component: SessionAfterComponent;
  let fixture: ComponentFixture<SessionAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionAfterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
