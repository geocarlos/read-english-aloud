import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnWordPairsPage } from './learn-word-pairs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LearnWordPairsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnWordPairsPage),
    ComponentsModule
  ],
})
export class LearnWordPairsPageModule {}
