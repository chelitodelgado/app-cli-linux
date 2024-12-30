import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuTabComponent } from './menu-tab.component';
import { MenuTabRoutingModule } from './menu-tab-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTabRoutingModule
  ],
  declarations: [MenuTabComponent],
  exports: [MenuTabComponent],
})
export class MenuTabModule {}
