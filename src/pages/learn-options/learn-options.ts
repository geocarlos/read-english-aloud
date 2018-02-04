import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudyContent } from '../../models/study-content.interface';
import { CONTENT_LIST } from '../../content/content';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

@IonicPage()
@Component({
  selector: 'page-learn-options',
  templateUrl: 'learn-options.html',
})
export class LearnOptionsPage {

  private options = [
    { list: 0, content: CONTENT_LIST[0] },
    { list: 1, content: CONTENT_LIST[1] },
    { list: 2, content: CONTENT_LIST[2] },
    { list: 3, content: CONTENT_LIST[3] }
  ];

  private LEARN_OPTIONS: any = {};

  private langs = ["en", "pt"];

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private translate: TranslateService, private globalization: Globalization) {
    this.globalization.getPreferredLanguage()
      .then(res => {
        this.translate.setDefaultLang('en');
        if (this.langs.some(value => value === res.value.substring(0, 2))) {
          this.translate.use(res.value.substring(0, 2));
        }
        this.translate.get("LEARN_OPTIONS").subscribe(value => {
          this.LEARN_OPTIONS = value;
        });
      });
  }

  goToLearnPage(option: number): void {
    this.navCtrl.push(this.options[option].content.page, {
      content: this.options[option].content
    })
  }

}
