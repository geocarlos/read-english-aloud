import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnWordsPage } from './learn-words';

@NgModule({
  declarations: [
    LearnWordsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnWordsPage),
  ],
})
export class LearnWordsPageModule {}
