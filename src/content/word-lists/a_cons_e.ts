import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/a_cons_e"
// const mediaPath: string = "assets/audio/a_cons_e"

const wordList: Word[] = [
  new Word("back", "bæk", `${mediaPath}/a_cons_e_0.mp3`, new Media),
  new Word("bake", "beɪk", `${mediaPath}/a_cons_e_1.mp3`, new Media),
  new Word("can", "kæn", `${mediaPath}/a_cons_e_2.mp3`, new Media),
  new Word("cane", "keɪn", `${mediaPath}/a_cons_e_3.mp3`, new Media),
  new Word("fat", "fæt", `${mediaPath}/a_cons_e_4.mp3`, new Media),
  new Word("fate", "feɪt", `${mediaPath}/a_cons_e_5.mp3`, new Media),
  new Word("mad", "mæd", `${mediaPath}/a_cons_e_6.mp3`, new Media),
  new Word("made", "meɪd", `${mediaPath}/a_cons_e_7.mp3`, new Media),
  new Word("pal", "pæl", `${mediaPath}/a_cons_e_8.mp3`, new Media),
  new Word("pale", "peɪl", `${mediaPath}/a_cons_e_9.mp3`, new Media),
]

export const WORD_LIST_A_CONS_E = wordList;
