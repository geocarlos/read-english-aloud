import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/vowel_e_exceptions"
// const mediaPath: string = "assets/audio/vowel_e_exceptions"

const wordList: Word[] = [
  new Word("bass", "beɪs", `${mediaPath}/vowel_e_ex_0.mp3`, new Media),
  new Word("have", "hæv", `${mediaPath}/vowel_e_ex_1.mp3`, new Media),
  new Word("vase", "vɑːz", `${mediaPath}/vowel_e_ex_2.mp3`, new Media),
  new Word("war", "wɔːʳ", `${mediaPath}/vowel_e_ex_3.mp3`, new Media),
  new Word("was", "wɒz", `${mediaPath}/vowel_e_ex_4.mp3`, new Media),
  new Word("what", "wɒt", `${mediaPath}/vowel_e_ex_5.mp3`, new Media),
  new Word("give", "gɪv", `${mediaPath}/vowel_e_ex_6.mp3`, new Media),
  new Word("live", "lɪv", `${mediaPath}/vowel_e_ex_7.mp3`, new Media),
  new Word("done", "dʌn", `${mediaPath}/vowel_e_ex_8.mp3`, new Media),
  new Word("gone", "gɒn", `${mediaPath}/vowel_e_ex_9.mp3`, new Media),
  new Word("Job", "dʒəʊb", `${mediaPath}/vowel_e_ex_10.mp3`, new Media),
  new Word("sloth", "sloʊθ", `${mediaPath}/vowel_e_ex_11.mp3`, new Media),
  new Word("push", "pʊʃ", `${mediaPath}/vowel_e_ex_12.mp3`, new Media),
  new Word("put", "pʊt", `${mediaPath}/vowel_e_ex_13.mp3`, new Media),
];

export const VOWEL_E_EXCEPTIONS = wordList;
export const VOWEL_R_E_EXCEPTIONS = [wordList[3], new Word("are", "ɑːʳ", `${mediaPath}/vowel_r_e_exception.mp3`, new Media)];
