import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ie"
// const mediaPath: string = "assets/audio/ie"

const wordList: Word[] = [
  new Word("die", "daɪ", `${mediaPath}/ie_0.mp3`, new Media),
  new Word("pie", "paɪ", `${mediaPath}/ie_1.mp3`, new Media),
  new Word("lie", "laɪ", `${mediaPath}/ie_2.mp3`, new Media),
  new Word("sieve", "siːv", `${mediaPath}/ie_3.mp3`, new Media),
  new Word("grieve", "griːv", `${mediaPath}/ie_4.mp3`, new Media),
  new Word("brief", "briːf", `${mediaPath}/ie_5.mp3`, new Media)
];

export const WORD_LIST_IE = wordList;
