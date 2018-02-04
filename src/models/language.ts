import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

export class Language {

  constructor(private translate: TranslateService, private globalization: Globalization){
  }

  setTranslations() {
    // Device preferred language
    let preferredLang = "";
    this.globalization.getPreferredLanguage()
      .then(res => { preferredLang = res.value })
      .catch(e => console.log(e));

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

}
