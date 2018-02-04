import { NgModule } from '@angular/core'
import { IonicModule } from 'ionic-angular';
import { WordPairStudyContentComponent } from './word-pair-study-content/word-pair-study-content';
import { WordPairExerciseComponent } from './word-pair-exercise/word-pair-exercise';

@NgModule({
  declarations: [
    WordPairStudyContentComponent,
    WordPairExerciseComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    WordPairStudyContentComponent,
    WordPairExerciseComponent
  ]
})

export class ComponentsModule {

}
