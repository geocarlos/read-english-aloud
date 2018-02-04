import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordListPage } from './word-list';

@NgModule({
  declarations: [
    WordListPage,
  ],
  imports: [
    IonicPageModule.forChild(WordListPage),
  ],
})
export class WordListPageModule {}
