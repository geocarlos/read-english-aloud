import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ai_ay"
// const mediaPath: string = "assets/audio/ai_ay"

const wordList: Word[] = [
  new Word("wait", "weɪt", `${mediaPath}/ai_ay_0.mp3`, new Media),
  new Word("waist", "weɪst", `${mediaPath}/ai_ay_1.mp3`, new Media),
  new Word("mail", "meɪl", `${mediaPath}/ai_ay_2.mp3`, new Media),
  new Word("sail", "seɪl", `${mediaPath}/ai_ay_3.mp3`, new Media),
  new Word("paid", "peɪd", `${mediaPath}/ai_ay_4.mp3`, new Media),
  new Word("laid", "leɪd", `${mediaPath}/ai_ay_5.mp3`, new Media),
  new Word("maid", "meɪd", `${mediaPath}/ai_ay_6.mp3`, new Media),
  new Word("bait", "beɪt", `${mediaPath}/ai_ay_7.mp3`, new Media),
  new Word("air", "eəʳ", `${mediaPath}/ai_ay_8.mp3`, new Media),
  new Word("hair", "heəʳ", `${mediaPath}/ai_ay_9.mp3`, new Media),
  new Word("fair", "feəʳ", `${mediaPath}/ai_ay_10.mp3`, new Media),
  new Word("day", "deɪ", `${mediaPath}/ai_ay_11.mp3`, new Media),
  new Word("say", "seɪ", `${mediaPath}/ai_ay_12.mp3`, new Media),
  new Word("may", "meɪ", `${mediaPath}/ai_ay_13.mp3`, new Media),
  new Word("lay", "leɪ", `${mediaPath}/ai_ay_14.mp3`, new Media),
  new Word("play", "pleɪ", `${mediaPath}/ai_ay_15.mp3`, new Media),
  new Word("way", "weɪ", `${mediaPath}/ai_ay_16.mp3`, new Media),
  new Word("stay", "steɪ", `${mediaPath}/ai_ay_17.mp3`, new Media),
  new Word("pay", "peɪ", `${mediaPath}/ai_ay_18.mp3`, new Media)
];

export const WORD_LIST_AI_AY = wordList;
