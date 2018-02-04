import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudyContent } from '../../models/study-content.interface';

@IonicPage()
@Component({
  selector: 'page-learn-word-pairs',
  templateUrl: 'learn-word-pairs.html',
})
export class LearnWordPairsPage {


  private wordPairsContent: StudyContent;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.wordPairsContent = this.navParams.get('content');
  }
}
