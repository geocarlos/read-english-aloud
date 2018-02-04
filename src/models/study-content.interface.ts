import { Word } from './word-class';

export interface StudyContent {
  title: string;
  description: string;
  words: [{ title: string, words: Word[], explanation: string }];
  page: string;
  exceptions: any;
  viewed: boolean;
}
