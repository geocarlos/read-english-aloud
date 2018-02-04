import { Word } from './word-class';

export interface Exercise {
  title: string;
  words: Word[];
  score: number;
  done: boolean;
  page: string;
}
