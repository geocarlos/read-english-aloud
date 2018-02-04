import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/vowel_gh_ght"
// const mediaPath: string = "assets/audio/vowel_gh_ght"

const wordList: Word[] = [
  new Word("high", "haɪ", `${mediaPath}/vowel_gh_ght_0.mp3`, new Media),
  new Word("thigh", "θaɪ", `${mediaPath}/vowel_gh_ght_1.mp3`, new Media),
  new Word("flight", "flaɪt", `${mediaPath}/vowel_gh_ght_2.mp3`, new Media),
  new Word("sight", "saɪt", `${mediaPath}/vowel_gh_ght_3.mp3`, new Media),
  new Word("night", "naɪt", `${mediaPath}/vowel_gh_ght_4.mp3`, new Media),
  new Word("fright", "fraɪt", `${mediaPath}/vowel_gh_ght_5.mp3`, new Media),
  new Word("right", "raɪt", `${mediaPath}/vowel_gh_ght_6.mp3`, new Media),
  new Word("knight", "naɪt", `${mediaPath}/vowel_gh_ght_7.mp3`, new Media),
  new Word("sought", "sɔːt", `${mediaPath}/vowel_gh_ght_8.mp3`, new Media),
  new Word("bought", "bɔːt", `${mediaPath}/vowel_gh_ght_9.mp3`, new Media),
  new Word("Hugh", "hjuː", `${mediaPath}/vowel_gh_ght_10.mp3`, new Media),
  new Word("laugh", "lɑːf", `${mediaPath}/vowel_gh_ght_11.mp3`, new Media),
  new Word("cough", "kɒf", `${mediaPath}/vowel_gh_ght_12.mp3`, new Media)
];

export const WORD_LIST_VOWEL_GH_GHT = wordList;
