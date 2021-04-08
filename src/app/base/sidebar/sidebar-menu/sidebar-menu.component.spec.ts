import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuComponent } from './sidebar-menu.component';
import {NbLayoutModule} from '@nebular/theme';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMenuComponent ],
      imports: [NbLayoutModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
