import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ui_uy"
// const mediaPath: string = "assets/audio/ui_uy"

const wordList: Word[] = [
  new Word("suit", "suːt", `${mediaPath}/ui_uy_0.mp3`, new Media),
  new Word("fruit", "fruːt", `${mediaPath}/ui_uy_1.mp3`, new Media),
  new Word("juice", "dʒuːs", `${mediaPath}/ui_uy_2.mp3`, new Media),
  new Word("build", "bɪld", `${mediaPath}/ui_uy_3.mp3`, new Media),
  new Word("buy", "baɪ", `${mediaPath}/ui_uy_4.mp3`, new Media),
  new Word("guy", "gaɪ", `${mediaPath}/ui_uy_5.mp3`, new Media),
  new Word("suint", "suːɪnt", `${mediaPath}/ui_uy_6.mp3`, new Media),
  new Word("ruin", "ruːɪn", `${mediaPath}/ui_uy_7.mp3`, new Media)
];

export const WORD_LIST_UI_UY = wordList;
