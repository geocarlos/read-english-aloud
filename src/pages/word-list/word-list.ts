import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-word-list',
  templateUrl: 'word-list.html',
})
export class WordListPage {

  private wordList: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wordList = this.navParams.get('wordList');
  }

}
