import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

@IonicPage()
@Component({
  selector: 'page-nav-tabs',
  templateUrl: 'nav-tabs.html'
})
export class NavTabsPage {

  homeRoot = 'HomePage'
  learnRoot = 'LearnOptionsPage'
  practiceRoot = 'PracticeOptionsPage'

  private NAV: any = {
    HOME: {
      en: "Home",
      pt: "Início"
    },
    LEARN: {
      en: "Learn",
      pt: "Estudar"
    },
    PRACTICE: {
      en: "Practice",
      pt: "Praticar"
    }
  };

  private lang = "en";

  private langs = ["en", "pt"];

  constructor(public navCtrl: NavController, private navParams: NavParams, private translate: TranslateService,
    private globalization: Globalization) {
    this.globalization.getPreferredLanguage()
      .then(res => {
        if (this.langs.some(value => value === res.value.substring(0, 2))) {
          this.lang = res.value.substring(0, 2);
        }
      })
  }
}
