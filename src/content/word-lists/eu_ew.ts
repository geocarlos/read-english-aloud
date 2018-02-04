import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/eu_ew"
// const mediaPath: string = "assets/audio/eu_ew"

const wordList: Word[] = [
  new Word("flew", "fluː", `${mediaPath}/eu_ew_0.mp3`, new Media),
  new Word("blew", "bluː", `${mediaPath}/eu_ew_1.mp3`, new Media),
  new Word("chew", "tʃuː", `${mediaPath}/eu_ew_2.mp3`, new Media),
  new Word("new", "njuː", `${mediaPath}/eu_ew_3.mp3`, new Media),
  new Word("knew", "njuː", `${mediaPath}/eu_ew_4.mp3`, new Media),
  new Word("dew", "djuː", `${mediaPath}/eu_ew_5.mp3`, new Media),
  new Word("deuce", "djuːs", `${mediaPath}/eu_ew_6.mp3`, new Media)
];

export const WORD_LIST_EU_EW = wordList;
