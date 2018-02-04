import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/y_vowel"
// const mediaPath: string = "assets/audio/y_vowel"

const wordList: Word[] = [

  new Word("sky", "skaɪ", `${mediaPath}/y_vowel_0.mp3`, new Media),
  new Word("fly", "flaɪ", `${mediaPath}/y_vowel_1.mp3`, new Media),
  new Word("try", "traɪ", `${mediaPath}/y_vowel_2.mp3`, new Media),
  new Word("dye", "daɪ", `${mediaPath}/y_vowel_3.mp3`, new Media),
  new Word("cry", "kraɪ", `${mediaPath}/y_vowel_4.mp3`, new Media),
  new Word("my", "maɪ", `${mediaPath}/y_vowel_5.mp3`, new Media),
  new Word("why", "waɪ", `${mediaPath}/y_vowel_6.mp3`, new Media)
];

export const WORD_LIST_Y_VOWEL = wordList;
