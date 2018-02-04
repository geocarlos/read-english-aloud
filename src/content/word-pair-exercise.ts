import { Exercise } from '../models/exercise.interface';
import { WORD_LIST_A_CONS_E } from './word-lists/a_cons_e';
import { WORD_LIST_I_CONS_E } from './word-lists/i_cons_e';
import { WORD_LIST_O_CONS_E } from './word-lists/o_cons_e';
import { WORD_LIST_U_CONS_E } from './word-lists/u_cons_e';

const exercises: Exercise[] = [
  {
    title: "Practice words with A",
    words: createList(WORD_LIST_A_CONS_E),
    score: 0,
    done: false,
    page: "WordPairExercisePage"
  },
  {
    title: "Practice words with I",
    words: createList(WORD_LIST_I_CONS_E),
    score: 0,
    done: false,
    page: "WordPairExercisePage"
  },
  {
    title: "Practice words with O",
    words: createList(WORD_LIST_O_CONS_E),
    score: 0,
    done: false,
    page: "WordPairExercisePage"
  },
  {
    title: "Practice words with U",
    words: createList(WORD_LIST_U_CONS_E),
    score: 0,
    done: false,
    page: "WordPairExercisePage"
  }
]

function createList(words){
  let list = [];
  words.forEach(function(w){
    list.push(w);
  })
  return list;
}

export const WORD_PAIR_EXERCISE_LIST = exercises;
