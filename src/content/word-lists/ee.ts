import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ee"
// const mediaPath: string = "assets/audio/ee"

const wordList: Word[] = [
  new Word("meet", "miːt", `${mediaPath}/ee_0.mp3`, new Media),
  new Word("feet", "fiːt", `${mediaPath}/ee_1.mp3`, new Media),
  new Word("cheek", "chiːk", `${mediaPath}/ee_2.mp3`, new Media),
  new Word("sheep", "shiːp", `${mediaPath}/ee_3.mp3`, new Media),
  new Word("sheet", "shiːt", `${mediaPath}/ee_4.mp3`, new Media),
  new Word("heel", "hiːl", `${mediaPath}/ee_5.mp3`, new Media),
  new Word("beet", "biːt", `${mediaPath}/ee_6.mp3`, new Media),
  new Word("meek", "miːk", `${mediaPath}/ee_7.mp3`, new Media),
  new Word("deer", "dɪəʳ", `${mediaPath}/ee_8.mp3`, new Media)
];

export const WORD_LIST_EE = wordList;
