import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/a_ll_lk"
// const mediaPath: string = "assets/audio/ai_ay"

const wordList: Word[] = [
  new Word("all", "ɔːl", `${mediaPath}/a_ll_lk_0.mp3`, new Media),
  new Word("ball", "bɔːl", `${mediaPath}/a_ll_lk_1.mp3`, new Media),
  new Word("mall", "mɔːl", `${mediaPath}/a_ll_lk_2.mp3`, new Media),
  new Word("gall", "gɔːl", `${mediaPath}/a_ll_lk_3.mp3`, new Media),
  new Word("fall", "fɔːl", `${mediaPath}/a_ll_lk_4.mp3`, new Media),
  new Word("small", "smɔːl", `${mediaPath}/a_ll_lk_5.mp3`, new Media),
  new Word("call", "kɔːl", `${mediaPath}/a_ll_lk_6.mp3`, new Media),
  new Word("wall", "wɔːl", `${mediaPath}/a_ll_lk_7.mp3`, new Media),
  new Word("hall", "hɔːl", `${mediaPath}/a_ll_lk_8.mp3`, new Media),
  new Word("walk", "wɔːk", `${mediaPath}/a_ll_lk_9.mp3`, new Media),
  new Word("talk", "tɔːk", `${mediaPath}/a_ll_lk_10.mp3`, new Media),
  new Word("stalk", "stɔːk", `${mediaPath}/a_ll_lk_11.mp3`, new Media),
  new Word("chalk", "tʃɔːk", `${mediaPath}/a_ll_lk_12.mp3`, new Media)
];

export const WORD_LIST_A_LL_LK = wordList;
