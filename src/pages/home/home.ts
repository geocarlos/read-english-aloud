import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private HOME: any = {};

  private langs = ["en", "pt"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService,
    private globalization: Globalization) {
    this.globalization.getPreferredLanguage()
      .then(res => {
        this.translate.setDefaultLang('en');
        if (this.langs.some(value => value === res.value.substring(0, 2))) {
          this.translate.use(res.value.substring(0, 2));
        }
        this.translate.get("HOME").subscribe(value => {
          this.HOME = value;
        })
      })
  }
}
