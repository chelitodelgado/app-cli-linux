import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuTabModule } from '../shared/menu-tab/menu-tab.module';
import { OptionModule } from '../components/options/options.module';
import { HeaderModule } from '../components/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuTabModule,
    OptionModule,
    HeaderModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
