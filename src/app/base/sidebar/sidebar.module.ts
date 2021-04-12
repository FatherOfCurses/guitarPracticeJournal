import {NgModule} from '@angular/core';
import {NbCardModule, NbLayoutModule, NbMenuComponent, NbMenuModule} from '@nebular/theme';


@NgModule({
  declarations: [ NbMenuComponent ],
  imports: [ NbCardModule, NbLayoutModule, NbMenuModule]
})

export class SidebarModule {}
