import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/oi_oy"
// const mediaPath: string = "assets/audio/oi_oy"

const wordList: Word[] = [
  new Word("boil", "bɔɪl", `${mediaPath}/oi_oy_0.mp3`, new Media),
  new Word("oil", "ɔɪl", `${mediaPath}/oi_oy_1.mp3`, new Media),
  new Word("coin", "kɔɪn", `${mediaPath}/oi_oy_2.mp3`, new Media),
  new Word("loin", "lɔɪn", `${mediaPath}/oi_oy_3.mp3`, new Media),
  new Word("join", "dʒɔɪn", `${mediaPath}/oi_oy_4.mp3`, new Media),
  new Word("joint", "dʒɔɪnt", `${mediaPath}/oi_oy_5.mp3`, new Media),
  new Word("spoil", "spɔɪl", `${mediaPath}/oi_oy_6.mp3`, new Media),
  new Word("boy", "bɔɪ", `${mediaPath}/oi_oy_7.mp3`, new Media),
  new Word("joy", "dʒɔɪ", `${mediaPath}/oi_oy_8.mp3`, new Media),
  new Word("toy", "tɔɪ", `${mediaPath}/oi_oy_9.mp3`, new Media)
];

export const WORD_LIST_OI_OY = wordList;
