import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/vowel_r_e"
// const mediaPath: string = "assets/audio/a_cons_e"

const wordList: Word[] = [
  new Word("car", "kɑːʳ", `${mediaPath}/vowel_r_e_0.mp3`, new Media),
  new Word("care", "keəʳ", `${mediaPath}/vowel_r_e_1.mp3`, new Media),
  new Word("far", "fɑːʳ", `${mediaPath}/vowel_r_e_2.mp3`, new Media),
  new Word("fare", "feəʳ", `${mediaPath}/vowel_r_e_3.mp3`, new Media),
  new Word("fir", "fɜːʳ", `${mediaPath}/vowel_r_e_4.mp3`, new Media),
  new Word("fire", "faɪəʳ", `${mediaPath}/vowel_r_e_5.mp3`, new Media),
  new Word("for", "fɔːʳ", `${mediaPath}/vowel_r_e_6.mp3`, new Media),
  new Word("fore", "fɔːʳ", `${mediaPath}/vowel_r_e_7.mp3`, new Media),
  new Word("cur", "kɜːʳ", `${mediaPath}/vowel_r_e_8.mp3`, new Media),
  new Word("cure", "kjʊəʳ", `${mediaPath}/vowel_r_e_9.mp3`, new Media)
];

export const WORD_LIST_VOWEL_R_E = wordList;
