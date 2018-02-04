import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/oo"
// const mediaPath: string = "assets/audio/oo"

const wordList: Word[] = [
  new Word("book", "bʊk", `${mediaPath}/oo_0.mp3`, new Media),
  new Word("foot", "fʊt", `${mediaPath}/oo_1.mp3`, new Media),
  new Word("cook", "cʊk", `${mediaPath}/oo_2.mp3`, new Media),
  new Word("look", "lʊk", `${mediaPath}/oo_3.mp3`, new Media),
  new Word("cool", "kuːl", `${mediaPath}/oo_4.mp3`, new Media),
  new Word("hood", "hʊd", `${mediaPath}/oo_5.mp3`, new Media),
  new Word("poor", "pʊəʳ", `${mediaPath}/oo_6.mp3`, new Media),
  new Word("boot", "buːt", `${mediaPath}/oo_7.mp3`, new Media),
  new Word("food", "fuːd", `${mediaPath}/oo_8.mp3`, new Media),
  new Word("coo", "kuː", `${mediaPath}/oo_9.mp3`, new Media),
  new Word("boo", "buː", `${mediaPath}/oo_10.mp3`, new Media),
  new Word("shoot", "ʃuːt", `${mediaPath}/oo_11.mp3`, new Media),
  new Word("blood", "blʌd", `${mediaPath}/oo_12.mp3`, new Media),
  new Word("flood", "flʌd", `${mediaPath}/oo_13.mp3`, new Media),
  new Word("door", "dɔːʳ", `${mediaPath}/oo_14.mp3`, new Media),
  new Word("floor", "flɔːʳ", `${mediaPath}/oo_15.mp3`, new Media)
];

export const WORD_LIST_OO = wordList;
