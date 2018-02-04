import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/vowel_nd_mb"
// const mediaPath: string = "assets/audio/vowel_nd_mb"

const wordList: Word[] = [
  new Word("find", "faɪnd", `${mediaPath}/vowel_nd_mb_0.mp3`, new Media),
  new Word("wind", "waɪnd", `${mediaPath}/vowel_nd_mb_1.mp3`, new Media),
  new Word("hind", "haɪnd", `${mediaPath}/vowel_nd_mb_2.mp3`, new Media),
  new Word("bind", "baɪnd", `${mediaPath}/vowel_nd_mb_3.mp3`, new Media),
  new Word("kind", "kaɪnd", `${mediaPath}/vowel_nd_mb_4.mp3`, new Media),
  new Word("climb", "klaɪm", `${mediaPath}/vowel_nd_mb_5.mp3`, new Media),
  new Word("comb", "koʊm", `${mediaPath}/vowel_nd_mb_6.mp3`, new Media)
];

export const WORD_LIST_VOWEL_ND_MB = wordList;
