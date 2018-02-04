import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudyContent } from '../../models/study-content.interface';

@IonicPage()
@Component({
  selector: 'page-learn-words',
  templateUrl: 'learn-words.html',
})
export class LearnWordsPage {

  private wordsContent: StudyContent;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.wordsContent = this.navParams.get('content');
  }

  viewWordList(wordList): void {
    this.navCtrl.push("WordListPage", {
      wordList: wordList
    });
  }

}
