import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WORD_PAIR_EXERCISE_LIST } from '../../content/word-pair-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

@IonicPage()
@Component({
  selector: 'page-practice-options',
  templateUrl: 'practice-options.html',
})
export class PracticeOptionsPage {

  private options = [
    { list: 0, content: WORD_PAIR_EXERCISE_LIST[0] },
    { list: 1, content: WORD_PAIR_EXERCISE_LIST[1] },
    { list: 2, content: WORD_PAIR_EXERCISE_LIST[2] },
    { list: 3, content: WORD_PAIR_EXERCISE_LIST[3] }
  ];



  private PRACTICE_OPTIONS: any = {};

  private langs = ["en", "pt"];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, private globalization: Globalization) {
    this.globalization.getPreferredLanguage()
      .then(res => {
        this.translate.setDefaultLang('en');
        if (this.langs.some(value => value === res.value.substring(0, 2))) {
          this.translate.use(res.value.substring(0, 2));
        }
        this.translate.get("PRACTICE_OPTIONS").subscribe(value => {
          this.PRACTICE_OPTIONS = value;
        });
      });
  }

  goToExercisePage(option: number): void {
    this.navCtrl.push(this.options[option].content.page, {
      content: this.options[option].content
    });
  }

}
