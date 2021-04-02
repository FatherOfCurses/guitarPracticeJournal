import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NbCardModule, NbMenuModule, NbThemeModule} from '@nebular/theme';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [
    NbThemeModule,
    NbMenuModule,
    NbCardModule
  ],
  exports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseModule { }
