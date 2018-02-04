import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/o_cons_e"
// const mediaPath: string = "assets/audio/o_cons_e"

const wordList: Word[] = [

  new Word("dot", "dɒt", `${mediaPath}/o_cons_e_0.mp3`, new Media),
  new Word("dote", "doʊt", `${mediaPath}/o_cons_e_1.mp3`, new Media),
  new Word("not", "nɒt", `${mediaPath}/o_cons_e_2.mp3`, new Media),
  new Word("note", "noʊt", `${mediaPath}/o_cons_e_3.mp3`, new Media),
  new Word("rob", "rɒb", `${mediaPath}/o_cons_e_4.mp3`, new Media),
  new Word("robe", "roʊb", `${mediaPath}/o_cons_e_5.mp3`, new Media),
  new Word("rod", "rɒd", `${mediaPath}/o_cons_e_6.mp3`, new Media),
  new Word("rode", "roʊd", `${mediaPath}/o_cons_e_7.mp3`, new Media),
  new Word("ton", "tʌn", `${mediaPath}/o_cons_e_8.mp3`, new Media),
  new Word("tone", "toʊn", `${mediaPath}/o_cons_e_9.mp3`, new Media)
];

export const WORD_LIST_O_CONS_E = wordList;
