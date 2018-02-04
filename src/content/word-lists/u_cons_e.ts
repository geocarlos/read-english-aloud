import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/u_cons_e"
// const mediaPath: string = "assets/audio/u_cons_e"

const wordList: Word[] = [
  new Word("cut", "kʌt", `${mediaPath}/u_cons_e_0.mp3`, new Media),
  new Word("cute", "kjuːt", `${mediaPath}/u_cons_e_1.mp3`, new Media),
  new Word("dud", "dʌd", `${mediaPath}/u_cons_e_2.mp3`, new Media),
  new Word("dude", "djuːd", `${mediaPath}/u_cons_e_3.mp3`, new Media),
  new Word("dun", "dʌn", `${mediaPath}/u_cons_e_4.mp3`, new Media),
  new Word("dune", "djuːn", `${mediaPath}/u_cons_e_5.mp3`, new Media),
  new Word("hug", "hʌg", `${mediaPath}/u_cons_e_6.mp3`, new Media),
  new Word("huge", "hjuːdʒ", `${mediaPath}/u_cons_e_7.mp3`, new Media),
  new Word("us", "ʌs", `${mediaPath}/u_cons_e_8.mp3`, new Media),
  new Word("use", "juːz", `${mediaPath}/u_cons_e_9.mp3`, new Media)
];

export const WORD_LIST_U_CONS_E = wordList;
