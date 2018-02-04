import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavTabsPage } from './nav-tabs';

@NgModule({
  declarations: [
    NavTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavTabsPage),
  ]
})
export class NavTabsPageModule {}
