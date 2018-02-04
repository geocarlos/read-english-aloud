import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ue"
// const mediaPath: string = "assets/audio/ue"

const wordList: Word[] = [
  new Word("blue", "bluː", `${mediaPath}/ue_0.mp3`, new Media),
  new Word("clue", "cluː", `${mediaPath}/ue_1.mp3`, new Media),
  new Word("due", "djuː", `${mediaPath}/ue_2.mp3`, new Media),
  new Word("glue", "gluː", `${mediaPath}/ue_3.mp3`, new Media),
  new Word("hue", "hjuː", `${mediaPath}/ue_4.mp3`, new Media)
];

export const WORD_LIST_UE = wordList;
