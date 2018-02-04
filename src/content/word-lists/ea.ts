import { Word } from '../../models/word-class';
import { Media, MediaObject } from '@ionic-native/media';

const mediaPath: string = "/android_asset/www/assets/audio/ea"
// const mediaPath: string = "assets/audio/ea"

const wordList: Word[] = [
  new Word("speak", "spiːk", `${mediaPath}/ea_0.mp3`, new Media),
  new Word("read", "riːd", `${mediaPath}/ea_1.mp3`, new Media),
  new Word("leak", "liːk", `${mediaPath}/ea_2.mp3`, new Media),
  new Word("beak", "biːk", `${mediaPath}/ea_3.mp3`, new Media),
  new Word("weak", "wiːk", `${mediaPath}/ea_4.mp3`, new Media),
  new Word("heal", "hiːl", `${mediaPath}/ea_5.mp3`, new Media),
  new Word("heat", "hiːt", `${mediaPath}/ea_6.mp3`, new Media),
  new Word("meat", "miːt", `${mediaPath}/ea_7.mp3`, new Media),
  new Word("mean", "miːn", `${mediaPath}/ea_8.mp3`, new Media),
  new Word("hear", "hɪəʳ", `${mediaPath}/ea_9.mp3`, new Media),
  new Word("year", "yɪəʳ", `${mediaPath}/ea_10.mp3`, new Media),
  new Word("fear", "fɪəʳ", `${mediaPath}/ea_11.mp3`, new Media),
  new Word("dear", "dɪəʳ", `${mediaPath}/ea_12.mp3`, new Media),
  new Word("steak", "steɪk", `${mediaPath}/ea_13.mp3`, new Media),
  new Word("great", "greɪt", `${mediaPath}/ea_14.mp3`, new Media),
  new Word("break", "breɪk", `${mediaPath}/ea_15.mp3`, new Media),
  new Word("bread", "brɛd", `${mediaPath}/ea_16.mp3`, new Media),
  new Word("read", "rɛd", `${mediaPath}/ea_17.mp3`, new Media),
  new Word("lead", "lɛd", `${mediaPath}/ea_18.mp3`, new Media),
  new Word("head", "hɛd", `${mediaPath}/ea_19.mp3`, new Media),
  new Word("swear", "sweəʳ", `${mediaPath}/ea_20.mp3`, new Media),
  new Word("wear", "weəʳ", `${mediaPath}/ea_21.mp3`, new Media),
  new Word("heard", "hɜːd", `${mediaPath}/ea_22.mp3`, new Media),
  new Word("beard", "bɪəʳd", `${mediaPath}/ea_23.mp3`, new Media),
  new Word("heart", "hɑːʳt", `${mediaPath}/ea_24.mp3`, new Media)
];

export const WORD_LIST_EA = wordList;
