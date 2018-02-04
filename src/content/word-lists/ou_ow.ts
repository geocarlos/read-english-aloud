import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ou_ow"
// const mediaPath: string = "assets/audio/ou_ow"

const wordList: Word[] = [
  new Word("soul", "soʊl", `${mediaPath}/ou_ow_0.mp3`, new Media),
  new Word("bowl", "boʊl", `${mediaPath}/ou_ow_1.mp3`, new Media),
  new Word("know", "noʊ", `${mediaPath}/ou_ow_2.mp3`, new Media),
  new Word("bow", "boʊ", `${mediaPath}/ou_ow_3.mp3`, new Media),
  new Word("row", "roʊ", `${mediaPath}/ou_ow_4.mp3`, new Media),
  new Word("snow", "snoʊ", `${mediaPath}/ou_ow_5.mp3`, new Media),
  new Word("bow", "baʊ", `${mediaPath}/ou_ow_6.mp3`, new Media),
  new Word("cow", "kaʊ", `${mediaPath}/ou_ow_7.mp3`, new Media),
  new Word("now", "naʊ", `${mediaPath}/ou_ow_8.mp3`, new Media),
  new Word("out", "aʊt", `${mediaPath}/ou_ow_9.mp3`, new Media),
  new Word("foul", "faʊl", `${mediaPath}/ou_ow_10.mp3`, new Media),
  new Word("trout", "traʊt", `${mediaPath}/ou_ow_11.mp3`, new Media),
  new Word("rout", "raʊt", `${mediaPath}/ou_ow_12.mp3`, new Media),
  new Word("wound", "waʊnd", `${mediaPath}/ou_ow_13.mp3`, new Media),
  new Word("ground", "graʊnd", `${mediaPath}/ou_ow_14.mp3`, new Media),
  new Word("pound", "paʊnd", `${mediaPath}/ou_ow_15.mp3`, new Media),
  new Word("sound", "saʊnd", `${mediaPath}/ou_ow_16.mp3`, new Media),
  new Word("hound", "haʊnd", `${mediaPath}/ou_ow_17.mp3`, new Media),
  new Word("route", "ruːt", `${mediaPath}/ou_ow_18.mp3`, new Media),
  new Word("bought", "bɔːt", `${mediaPath}/ou_ow_19.mp3`, new Media),
  new Word("cough", "kɒf", `${mediaPath}/ou_ow_20.mp3`, new Media),
  new Word("sought", "sɔːt", `${mediaPath}/ou_ow_21.mp3`, new Media),
  new Word("fought", "fɔːt", `${mediaPath}/ou_ow_22.mp3`, new Media),
  new Word("brought", "brɔːt", `${mediaPath}/ou_ow_23.mp3`, new Media),
  new Word("ought", "ɔːt", `${mediaPath}/ou_ow_24.mp3`, new Media),
  new Word("could", "kʊd", `${mediaPath}/ou_ow_25.mp3`, new Media),
  new Word("should", "ʃʊd", `${mediaPath}/ou_ow_26.mp3`, new Media),
  new Word("would", "wʊd", `${mediaPath}/ou_ow_27.mp3`, new Media),
  new Word("wound", "wuːnd", `${mediaPath}/ou_ow_28.mp3`, new Media)
];

export const WORD_LIST_OU_OW = wordList;
