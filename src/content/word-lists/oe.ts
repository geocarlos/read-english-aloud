import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/oe"
// const mediaPath: string = "assets/audio/oe"

const wordList: Word[] = [
  new Word("hoe", "hoʊ", `${mediaPath}/oe_0.mp3`, new Media),
  new Word("woe", "woʊ", `${mediaPath}/oe_1.mp3`, new Media),
  new Word("foe", "foʊ", `${mediaPath}/oe_2.mp3`, new Media),
  new Word("goes", "goʊz", `${mediaPath}/oe_3.mp3`, new Media)
];

export const WORD_LIST_OE = wordList;
