import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/oa"
// const mediaPath: string = "assets/audio/oa"

const wordList: Word[] = [
  new Word("road", "roʊd", `${mediaPath}/oa_0.mp3`, new Media),
  new Word("toad", "toʊd", `${mediaPath}/oa_1.mp3`, new Media),
  new Word("moan", "moʊn", `${mediaPath}/oa_2.mp3`, new Media),
  new Word("load", "loʊd", `${mediaPath}/oa_3.mp3`, new Media),
  new Word("boat", "boʊt", `${mediaPath}/oa_4.mp3`, new Media),
  new Word("goat", "goʊt", `${mediaPath}/oa_5.mp3`, new Media),
  new Word("board", "bɔːʳd", `${mediaPath}/oa_6.mp3`, new Media),
  new Word("broad", "brɔːd", `${mediaPath}/oa_7.mp3`, new Media),
  new Word("roar", "rɔːʳ", `${mediaPath}/oa_8.mp3`, new Media),
  new Word("boar", "bɔːʳ", `${mediaPath}/oa_9.mp3`, new Media)
];

export const WORD_LIST_OA = wordList;
