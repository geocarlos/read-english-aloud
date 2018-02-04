import { Component, Input } from '@angular/core';
import { StudyContent } from '../../models/study-content.interface';
import { Word } from '../../models/word-class';

@Component({
  selector: 'word-pair-study-content',
  templateUrl: 'word-pair-study-content.html'
})
export class WordPairStudyContentComponent {
  @Input() wordPairs: [{ title: string, words: Word[], showing: boolean }];
  @Input() exceptions: Word[];

  i: number = 0;

  ie: number = 0;

  showExceptions: boolean = false;

  DIRECTION_LEFT: number = 2;
  DIRECTION_RIGHT: number = 4;

  // DIRECTION_NONE         1
  // DIRECTION_LEFT         2
  // DIRECTION_RIGHT        4
  // DIRECTION_UP           8
  // DIRECTION_DOWN         16
  // DIRECTION_HORIZONTAL   6
  // DIRECTION_VERTICAL     24
  // DIRECTION_ALL          30

  forward(wordPair): void {
    if (this.i >= wordPair.words.length - 2) {
      this.i = 0;
    } else {
      this.i += 2;
    }
    this.playSoundPair(wordPair);
  }

  backwards(wordPair): void {
    if (this.i < 1) {
      this.i = wordPair.words.length - 2;
    } else {
      this.i -= 2;
    }
    this.playSoundPair(wordPair);
  }


  // Exceptions to the pronunciation rules
  forwardException(): void {
    if (this.ie >= this.exceptions.length - 1) {
      this.ie = 0;
    } else {
      this.ie += 1;
    }
    this.exceptions[this.ie].playSound();
  }

  backException(): void {
    if (this.ie < 1) {
      this.ie = this.exceptions.length - 1;
    } else {
      this.ie -= 1;
    }
    this.exceptions[this.ie].playSound();
  }
  // -- ends here -- //

  playSoundPair(wordPair) {
    wordPair.words[this.i].playSound();
    const that = this;
    setTimeout(function() {
      wordPair.words[that.i + 1].playSound();
    }, 2000)
  }

  handleSwipe(event, wordPair) {
    const dir = event.direction;
    console.log("You have swiped: ", dir);
    if (dir === this.DIRECTION_LEFT) {
      this.forward(wordPair);
      return;
    }
    if (dir === this.DIRECTION_RIGHT) {
      this.backwards(wordPair);
      return;
    }
  }

  handleExSwipe(event) {
    const dir = event.direction;
    if (dir === this.DIRECTION_LEFT) {
      this.forwardException();
      return;
    }
    if (dir === this.DIRECTION_RIGHT) {
      this.backException();
      return;
    }
  }

  toggleShow(wordPair) {
    if(wordPair.showing){
      wordPair.showing = false;
      return;
    }
    this.i = 0;
    this.wordPairs.forEach(function(wp) {
      wp.showing = false;
    })
    wordPair.showing = !wordPair.showing;
    this.playSoundPair(wordPair);
  }

  toggleShowExceptions() {
    this.showExceptions = !this.showExceptions;
  }
}
