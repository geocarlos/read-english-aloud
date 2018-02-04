import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/o_ll_lk"
// const mediaPath: string = "assets/audio/ai_ay"

const wordList: Word[] = [
  new Word("scroll", "skroʊl", `${mediaPath}/o_ll_lk_0.mp3`, new Media),
  new Word("roll", "roʊl", `${mediaPath}/o_ll_lk_1.mp3`, new Media),
  new Word("boll", "bəʊl", `${mediaPath}/o_ll_lk_2.mp3`, new Media),
  new Word("folk", "foʊk", `${mediaPath}/o_ll_lk_3.mp3`, new Media),
  new Word("moll", "mɒl", `${mediaPath}/o_ll_lk_5.mp3`, new Media),
  new Word("doll", "dɒl", `${mediaPath}/o_ll_lk_6.mp3`, new Media)
];

export const WORD_LIST_O_LL_LK = wordList;
