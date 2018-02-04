import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ei_ey"
// const mediaPath: string = "assets/audio/ei_ey"

const wordList: Word[] = [
  new Word("eight", "eɪt", `${mediaPath}/ei_ey_0.mp3`, new Media),
  new Word("veil", "veɪl", `${mediaPath}/ei_ey_1.mp3`, new Media),
  new Word("vein", "veɪn", `${mediaPath}/ei_ey_2.mp3`, new Media),
  new Word("they", "ðeɪ", `${mediaPath}/ei_ey_3.mp3`, new Media),
  new Word("grey", "greɪ", `${mediaPath}/ei_ey_4.mp3`, new Media),
  new Word("prey", "preɪ", `${mediaPath}/ei_ey_5.mp3`, new Media),
  new Word("their", "ðeəʳ", `${mediaPath}/ei_ey_6.mp3`, new Media),
  new Word("seize", "siːz", `${mediaPath}/ei_ey_7.mp3`, new Media),
  new Word("weird", "wɪəʳd", `${mediaPath}/ei_ey_8.mp3`, new Media),
  new Word("height", "haɪt", `${mediaPath}/ei_ey_9.mp3`, new Media)
];

export const WORD_LIST_EI_EY = wordList;
