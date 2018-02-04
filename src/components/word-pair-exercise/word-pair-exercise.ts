import { Component, Input } from '@angular/core';
import { Exercise } from '../../models/exercise.interface';
import { Word } from '../../models/word-class';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'word-pair-exercise',
  templateUrl: 'word-pair-exercise.html'
})
export class WordPairExerciseComponent {

  @Input() exercise: Exercise;

  waitingForAnswer: boolean = false;
  correctAnswer: Word;
  prevUserAnswer: Word;
  indexes = [];
  clicked: boolean = false;

  constructor(private toastCtrl: ToastController) {
  }

  checkAnswer(userAnswer: string): void {
    if(this.clicked) return;
    this.clicked = true;
    if (userAnswer === this.correctAnswer.getText()) {
      this.exercise.score++;
      if (this.exercise.score === 1) {
        this.presentToast(`Good! You have scored 1 point!`);
      } else {
        this.presentToast(`Very good! Now you have ${this.exercise.score} points!`);
      }
    } else {
      this.presentToast(`Wrong! The word you've heard is "${this.correctAnswer.getText()}"`)
    }
    this.waitingForAnswer = false;

    if (this.exercise.words.length === this.indexes.length) {
      this.presentToast(`You have finished this exercise with ${this.exercise.score} points!`);
      this.exercise.score = 0;
      this.indexes = [];
      return;
    }

    const that = this;

    setTimeout(function() {
      that.setRound();
    }, 3000);
  }

  setRound(): void {
    this.clicked = false;
    if (!this.waitingForAnswer) {
      let rand: number;
      do {
        rand = Math.round(Math.random() * (this.exercise.words.length - 1));
      } while (this.indexes.some(value => value === rand));
      this.correctAnswer = this.exercise.words[rand];
      this.waitingForAnswer = true;
      this.indexes.push(rand);
    }
    this.correctAnswer.playSound();
  }

  resetExercise() {
    this.exercise.score = 0;
  }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
    this.exercise.words.sort(function(a, b) { return 0.5 - Math.random() });
    this.setRound();
  }
}
