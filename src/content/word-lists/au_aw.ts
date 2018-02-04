import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/au_aw"
// const mediaPath: string = "assets/audio/au_aw"

const wordList: Word[] = [
  new Word("daub", "dɔːb", `${mediaPath}/au_aw_0.mp3`, new Media),
  new Word("caught", "cɔːght", `${mediaPath}/au_aw_1.mp3`, new Media),
  new Word("daunt", "dɔːnt", `${mediaPath}/au_aw_2.mp3`, new Media),
  new Word("fault", "fɔːlt", `${mediaPath}/au_aw_3.mp3`, new Media),
  new Word("haunt", "hɔːnt", `${mediaPath}/au_aw_4.mp3`, new Media),
  new Word("law", "lɔː", `${mediaPath}/au_aw_5.mp3`, new Media),
  new Word("saw", "sɔː", `${mediaPath}/au_aw_6.mp3`, new Media),
  new Word("hawk", "hɔːk", `${mediaPath}/au_aw_7.mp3`, new Media),
  new Word("jaw", "jɔː", `${mediaPath}/au_aw_8.mp3`, new Media),
  new Word("paw", "pɔː", `${mediaPath}/au_aw_9.mp3`, new Media),
  new Word("yawn", "yɔːn", `${mediaPath}/au_aw_10.mp3`, new Media)
];

export const WORD_LIST_AU_AW = wordList;
