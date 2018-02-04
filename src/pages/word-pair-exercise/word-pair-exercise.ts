import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Exercise } from '../../models/exercise.interface';

@IonicPage()
@Component({
  selector: 'page-word-pair-exercise',
  templateUrl: 'word-pair-exercise.html',
})

export class WordPairExercisePage {

  private exercise: Exercise

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exercise = this.navParams.get('content');
  }
}
