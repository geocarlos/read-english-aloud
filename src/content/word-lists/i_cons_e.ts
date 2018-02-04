import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/i_cons_e"
// const mediaPath: string = "assets/audio/i_cons_e"

const wordList: Word[] = [
  new Word("bit", "bɪt", `${mediaPath}/i_cons_e_0.mp3`, new Media),
  new Word("bite", "baɪt", `${mediaPath}/i_cons_e_1.mp3`, new Media),
  new Word("dim", "dɪm", `${mediaPath}/i_cons_e_2.mp3`, new Media),
  new Word("dime", "daɪm", `${mediaPath}/i_cons_e_3.mp3`, new Media),
  new Word("fill", "fɪl", `${mediaPath}/i_cons_e_4.mp3`, new Media),
  new Word("file", "faɪl", `${mediaPath}/i_cons_e_5.mp3`, new Media),
  new Word("fin", "fɪn", `${mediaPath}/i_cons_e_6.mp3`, new Media),
  new Word("fine", "faɪn", `${mediaPath}/i_cons_e_7.mp3`, new Media),
  new Word("hid", "hɪd", `${mediaPath}/i_cons_e_8.mp3`, new Media),
  new Word("hide", "haɪd", `${mediaPath}/i_cons_e_9.mp3`, new Media),
  new Word("kit", "kɪt", `${mediaPath}/i_cons_e_10.mp3`, new Media),
  new Word("kite", "kaɪt", `${mediaPath}/i_cons_e_11.mp3`, new Media),
  new Word("sit", "sɪt", `${mediaPath}/i_cons_e_12.mp3`, new Media),
  new Word("site", "saɪt", `${mediaPath}/i_cons_e_13.mp3`, new Media),
  new Word("win", "wɪn", `${mediaPath}/i_cons_e_14.mp3`, new Media),
  new Word("wine", "waɪn", `${mediaPath}/i_cons_e_15.mp3`, new Media),
]

export const WORD_LIST_I_CONS_E = wordList;
