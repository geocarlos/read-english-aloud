import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnOptionsPage } from './learn-options';

@NgModule({
  declarations: [
    LearnOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnOptionsPage),
  ],
})
export class LearnOptionsPageModule {}
