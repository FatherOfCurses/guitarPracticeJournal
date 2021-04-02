import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let fixture: ComponentFixture<LandingPageComponent>;
  let component: LandingPageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the greeting card', () => {
    const compiled = fixture.nativeElement;
    const greeting = compiled.querySelector('[data-greeting]');
    expect(greeting).toBeTruthy();
  });

});
