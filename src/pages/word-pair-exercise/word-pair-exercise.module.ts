import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordPairExercisePage } from './word-pair-exercise';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WordPairExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(WordPairExercisePage),
    ComponentsModule
  ],
})
export class WordPairExercisePageModule {}
