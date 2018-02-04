import { WORD_LIST_A_CONS_E } from './word-lists/a_cons_e';
import { WORD_LIST_I_CONS_E } from './word-lists/i_cons_e';
import { WORD_LIST_O_CONS_E } from './word-lists/o_cons_e';
import { WORD_LIST_U_CONS_E } from './word-lists/u_cons_e';
import { VOWEL_E_EXCEPTIONS, VOWEL_R_E_EXCEPTIONS } from './word-lists/vowel_e_exceptions';

import { WORD_LIST_AI_AY } from './word-lists/ai_ay';
import { WORD_LIST_A_LL_LK } from './word-lists/a_ll_lk';
import { WORD_LIST_AU_AW } from './word-lists/au_aw';
import { WORD_LIST_EA } from './word-lists/ea';
import { WORD_LIST_EE } from './word-lists/ee';
import { WORD_LIST_EI_EY } from './word-lists/ei_ey';
import { WORD_LIST_EU_EW } from './word-lists/eu_ew';
import { WORD_LIST_IE } from './word-lists/ie';
import { WORD_LIST_OA } from './word-lists/oa';
import { WORD_LIST_OE } from './word-lists/oe';
import { WORD_LIST_O_LL_LK } from './word-lists/o_ll_lk';
import { WORD_LIST_OI_OY } from './word-lists/oi_oy';
import { WORD_LIST_OO } from './word-lists/oo';
import { WORD_LIST_OU_OW } from './word-lists/ou_ow';
import { WORD_LIST_UE } from './word-lists/ue';
import { WORD_LIST_UI_UY } from './word-lists/ui_uy';
import { WORD_LIST_Y_VOWEL } from './word-lists/y_vowel';
import { WORD_LIST_VOWEL_R_E } from './word-lists/vowel_r_e';
import { WORD_LIST_VOWEL_ND_MB } from './word-lists/vowel_nd_mb';
import { WORD_LIST_VOWEL_GH_GHT } from './word-lists/vowel_gh_ght';


import { StudyContent } from '../models/study-content.interface';


/*
Word Pair Content First Page


Monossílabos com uma letra representando o som vocálico

Qual o papel do e final mudo?

Em palavras como bite, late, cute, note, o e final não representa em si som
algum, mas influencia na pronúncia da vogal anterior. E esta é a regra geral entre ditongar ou não ditongar a vogal de palavras deste
tipo. Termina em consoante, a vogal não é ditongada; termina em e mudo, a
vogal é ditongada.

A:

hat – hate
fat – fate
mad – made
can – cane
pal – pale

I:
sit – site
fin – fine
win – wine
grip – gripe
sin – sine

O:
rod – rode
not – note
rob – robe
dot – dote
ton – tone

U:
cut – cute
dud – dude
dun – dune
us – use
hug – huge

Exceções mais conhecidas:
have
give
Job
bass
vase
what
was
war
live
sloth
done
gone
put
push

Observe que a exceção é Job, que é o Jó da Bíblia; job significando emprego é
pronunciado conforme a regra.

Quando a consoante antes de -e é r

Talvez você tenha observado que não há palavras terminadas em –ar, –ir, –or,
–ur ou –are,  –ore, –ure nos exemplos acima. Isto é porque o –r causa uma
diferença no som da vogal. Assim, a ausência do –e mudo no final, a pronúncia
das vogais é: –ar [], –ir [], –or [], –ur []. Quando há –e final mudo, a
pronúncia é: –are [], –ire [], –ore [], –ure []. Vejamos:

car – care
far - fare
fir – fire
for – fore
cur – cure

Exceção: are [].

Os monossílabos com –e terminados em consoante mais –e final mudo são
raros em inglês. Nos poucos que existem, o –e– é pronunciado []: cede [].
Quando não há –e final mudo, a pronúncia do –e varia entre [] e [], de acordo
com a variante de inglês do falante. Exemplos de algumas palavras:
beg – bet – let – red – web – check – sell – set – shell – smell – yes – guess

Também há diferença quando há –r, como, por exemplo, as palavras her []
ou [] e here []. É mais frequente em dissílabos, que serão vistos mais
adiante.


Monossílabos com duas letras representando o som vocálico

As combinações de vogais (referindo-se à escrita) mais comuns em inglês são:

ai; au; aw; ay; ea; ee; ei; eu; ew; ey; ie; oa; oe; oo; ou; ow; oi; oy; ue; ui; uy;

Vejamos então a pronúncia dessas combinações.

Pronúncia de “ai” e “ay”: []. Exemplos:

AI/AY:
wait; waist; mail; sail; paid; laid; maid; bait
Seguido de –r, soa []: air; hair; fair
day; say; may; lay; play; way; stay; pay

Exceções: said []; aisle [].

Pronúncia de “au” e “aw”: [].
Exemplos:

AU/AW:
daub; caught; daunt; fault; haunt
law; saw; hawk; jaw; paw; yawn

Exceções: laugh []

Pronúncia de “ea”: varia entre [], [] e []. Exemplos com []:

EA:
speak; read (infinitivo/presente); leak; beak; weak; heal; heat; meat; mean
hear*; year*; fear*; dear*
Exemplos com []:
steak; great; break
Exemplos com []:
bread; read (pretérito/particípio); lead (chumbo); head; swear; wear
Seguido de –rd, soa []: heard; beard; soa [] na palavra “heart”

Pronúncia de “ee”: []. Exemplos:

EE:
meet; feet; cheek; sheep; sheet; heel; beet; meek; deer*

Pronúncia de “ei” e “ey”: []. Exemplos:

EI/EY:
eight; veil; vein; they; grey; prey
“ei” soa [] seguido de –r, como na palavra “their”, soa [] nas palavras “seize” e
“weird” e soa [] na palavra “height”.

Pronúncia de “eu” e “ew”: [] e [].

EU/EW:
Exemplos com []: flew; blew; chew.
Exemplos com []: new; knew; dew; deuce;
Exceção: sew [] ou [] (costurar)

IE:
“ie” soa [] em palavras como: die; pie; lie. Soa [] em palavras como: sieve;
grieve; brief.

OA:
“oa” soa [] em palavras como:
road; toad; moan; load; boat; goat
Soa [] em palavras como:
board; broad; roar; boar

OE:
“oe” soa []. Exemplos: hoe; woe; foe

OO:
“oo” soa [] em palavras como:
book; foot; cook; look; hood; poor
Soa [] em palavras como:
boot; food; coo; boo; shoot
Soa [] em palavras como:
blood; flood
Soa [] em palavras como:
door; floor

OI/OY:
Pronúncia de “oi” e “oy”: []. Exemplos:
boil; oil; coin; loin; join; joint; spoil; boy; joy; toy

OU/OW:
Pronúncia de “ou” e “ow”: [] e []. Exemplos com []:
soul; bowl; know; bow (arco); row; snow
Exemplos com []:
bow (proa); cow; now; out; foul; trout; rout; wound (pp/pt de “wind”); ground;
pound; sound; hound; route* (pode ser [] ou [])
Seguido de –gh, “ou” soa [] em palavras como: bought; cough; sought; fought;
brought; ought
Soa [] nas palavras: could; should; would; wound (ferida)

UE:
“ue” soa [] em palavras como: blue; clue; glue

UI/UY:
“ui” soa [] em palavras como: suit; fruit; juice. Soa [] na palavra “Buick”. Soa
[] na palavra “build”. Seguidos de –n, “u” e “i” são pronunciados
separadamente, formando duas sílabas: suint []; ruin []
“uy” soa [] em palavras como: buy; guy

Quando o Y é vogal:

“y” quando  vogal em monossílabos, normalmente soa []. Exemplos:
sky; fly; try; dye; cry; my; why

Consoantes que afetam a pronúncia das vogais de forma diferente de
outras consoantes

-ll/lk
afeta a pronncia do “a”, em vez de [] é []. Exemplos:
all; mall; gall; fall; small; call; wall; hall; walk; talk; stalk; chalk
Exceção: shall [].
afeta a pronúncia do “o”, em vez de [], é []. Exemplos:
scroll; roll; boll; folk; soll. Exeções: moll []; doll []

-gh/-ght
Ditonga vogais:
Hugh []; high []; flight []; sight; night; fright; right; knight
Precedido de “ou”, este soa []: sought, cough, bought.

-nd
Ditonga o “i”: find []; wind [] (volta, giro; girar); hind; bind; kind
Exceção: wind [] (vento; ventar).
Caso semelhante: -mb: climb []; comb [].

Vogais em palavras com mais de uma sílaba

Ditongar ou não ditongar em palavras com mais de uma sílaba tem a ver com
haver ou não haver uma consoante dupla. Vejamos:

later []; latter []
latish []; lattice []
able []; apple []
holy []; holly []

Ditongados: driver; diver; baker; student; Cuba; China
Não ditongados: runner; dinner; curry; hurry

Exceções bem conhecidas: city []; pity []; study []; bury [];
river []; liver []

Como se pode observer, o “y” final em palavras com mais de uma sílaba soa
normalmente []: ability; happy; greedy; university

*/



const contentList: StudyContent[] = [
  {
    title: "Monossílabos com vogal de uma letra",
    description: `Qual o papel do e final mudo?<br /><br />

    Em palavras como bite, late, cute, note, o e final não representa em si som
    algum, mas influencia na pronúncia da vogal anterior. E esta é a regra geral entre ditongar ou não ditongar a vogal de palavras deste
    tipo. Termina em consoante, a vogal não é ditongada; termina em e mudo, a
    vogal é ditongada.`,
    words: [
      { title: "Words with letter A", words: WORD_LIST_A_CONS_E, explanation: null },
      { title: "Words with letter I", words: WORD_LIST_I_CONS_E, explanation: null },
      { title: "Words with letter O", words: WORD_LIST_O_CONS_E, explanation: null },
      { title: "Words with letter U", words: WORD_LIST_U_CONS_E, explanation: null },
      { title: "Vowels affected by R", words: WORD_LIST_VOWEL_R_E, explanation: "Observe como o som de cada vogal é afetado quando está próxima de R." }
    ],
    page: "LearnWordPairsPage",
    exceptions: VOWEL_E_EXCEPTIONS,
    viewed: false
  },
  {
    title: "Monossílabos: combinações de 2 letras",
    description: `As combinações de vogais (referindo-se à escrita, não ao som) mais comuns em inglês são:<br /><br />

    ai,  au, aw, ay, ea, ee, ei, eu ew, ey, ie, oa, oe, oo, ou, ow, oi, oy, ue, ui, uy<br /><br />

    Clique para ver explicações e exemplos com cada combinação.`,
    words: [
      {
        title: "Words with AI and AY", words: WORD_LIST_AI_AY,
        explanation: "The usual sound of ai and ay is /eɪ/"
      },
      {
        title: "Words with AU and AW", words: WORD_LIST_AU_AW,
        explanation: "The usual sound of au and aw is /ɔː/"
      },
      {
        title: "Words with EA", words: WORD_LIST_EA,
        explanation: "The combination ea may sound /iː/, /e/ (which may vary to /ɛ/), or /eɪ/. Near r, it varies to /ɜː/"
      },
      {
        title: "Words with EE", words: WORD_LIST_EE,
        explanation: "The basic sound of ee is /i/. Near r, it sounds /ɪə/"
      },
      {
        title: "Words with EI/EY", words: WORD_LIST_EI_EY,
        explanation: "The basic sound of ei/ey is /eɪ/. Near r, it varies to /eə/ or /ɪə/"
      },
      {
        title: "Words with EU/EW", words: WORD_LIST_EU_EW,
        explanation: "The basic sound of eu/ew is /uː/ or /juː/."
      },
      {
        title: "Words with IE", words: WORD_LIST_IE,
        explanation: "At the end of words, ie usually sounds /aɪ/; in the middle of the word, it usually sounds /iː/."
      },
      {
        title: "Words with OA", words: WORD_LIST_OA,
        explanation: "The sound of oa may be /oʊ/ or /ɔː/."
      },
      {
        title: "Words with OE", words: WORD_LIST_OE,
        explanation: "The sound of oe may be /oʊ/."
      },
      {
        title: "Words with OI/OY", words: WORD_LIST_OI_OY,
        explanation: "The sound of oi/oy may be /ɔɪ/."
      },
      {
        title: "Words with OO", words: WORD_LIST_OO,
        explanation: "The sound of oo is usually /ʊ/ or /uː/. Before r, it may sound something like /ɔː/. It may also sound /ʌ/, in words as listed below."
      },
      {
        title: "Words with OU/OW", words: WORD_LIST_OU_OW,
        explanation: "The sound of ou/ow is usually /oʊ/ or /aʊ/. In some words, as listed below, ou may also sound /ɔ/ or /ɒ/."
      },
      {
        title: "Words with UE", words: WORD_LIST_UE,
        explanation: "The sound of ue is usually /uː/ or /juː/."
      },
      {
        title: "Words with UI/UY", words: WORD_LIST_UI_UY,
        explanation: "Although y and i after a vowel usually sound similar, ui and uy usually sound quite different from each other. Where ui may sound as /uː/, uy usually sound as /aɪ/."
      },
      {
        title: "Words with Y as vowel", words: WORD_LIST_Y_VOWEL,
        explanation: "In one-syllable words where y is the vowel, it usually sounds as /aɪ/."
      }
    ],
    page: "LearnWordsPage",
    exceptions: null,
    viewed: false
  },
  {
    title: "Monossílabos com vogais seguidas de R",
    description: `Você já observou que a letra R afeta o som das vogais próximas a ela?<br /><br />

    Observe que o E final continua mudo, e o som da vogal também se modifica, dependendo de sua presença ou ausência.
    Porém, a letra O, por causa da presença do R, tem praticamente o mesmo som, independente de haver ou não um <strong>E</strong> mudo final.
    Consegue notar alguma diferença entre o som de <strong>for</strong> e <strong>fore</strong>? Algumas pessoas
    pronunciam mais O mais fechado em "for" e mais aberto em "fore", mas para outras, as duas palavras soam iguais.`,
    words: [
      { title: "Vowels affected by R", words: WORD_LIST_VOWEL_R_E, explanation: "Observe como o som de cada vogal é afetado quando está próxima de R." }
    ],
    page: "LearnWordPairsPage",
    exceptions: VOWEL_R_E_EXCEPTIONS,
    viewed: false
  },
  {
    title: "Monossílabos com LL, LK, GH, GHT, ND e MB",
    description: `Além do R, algumas outras consoantes também afetam o som da vogal.
    São geralmente uma consoante dupla, como LL, ou duas ou três consoantes diferentes, como LK, GH e GHT, sendo que normalmente
    só uma das consoantes não é muda.<br /><br />

    Consulte as listas abaixo, buscando entender o padrão que apresentado em cada uma, e também a lista de exceões,
    para aprender palavras que não seguem a regra.

    Observe que essa pronúncia só se aplica a LL, portanto, a palavra "pal", não é pronunciada [pɔːl], e sim [pæl].`,
    words: [
      { title: "A before LL or LK", words: WORD_LIST_A_LL_LK, explanation: "Observe que não há um E mudo no final, mas o som do A não é [æ]." },
      { title: "O before LL or LK", words: WORD_LIST_O_LL_LK, explanation: "Observe que não há um E mudo no final, mas o som do O soa muitas vezes como [oʊ] ou [əʊ], em vez de [ɒ] ou [ɔ]." },
      { title: "Words with GH and GHT", words: WORD_LIST_VOWEL_GH_GHT, explanation: "GH pode soar como G de \"gato\", como na palavra \"ghost\", mas em final de monossílabos, ou é mudo ou tem som de F." },
      { title: "Words with ND and MB", words: WORD_LIST_VOWEL_ND_MB, explanation: "Observe especialmente a palavra \"wind\", cuja pronúncia depende de seu significado." }
    ],
    page: "LearnWordsPage",
    exceptions: null,
    viewed: false
  }

]

export const CONTENT_LIST = contentList;

/*
Consoantes

B soa como em português, mas é mudo depois de m– em palavras como: comb []; numb
[].
C soa como em português, mas é normalmente aspirado quando tem o som [].
D soa semelhante ao português, mas não soa [] antes do som [] ou similar.
F soa como em português.
G soa como g de gato e soa como d de dia na pronúncia carioca. Não há uma regra
específica para a pronúncia [] ou [] antes de e ou i. É mudo quando inicia
palavras seguido de consoante: gnome []; gnosis []. Em palavras
de origem francesa, pode soar []: garage [].
H soa como r de rato na maioria das variantes de portugus do Brasil.
J soa [], como o d de dica na pronúncia carioca.
K soa como c de casa, mas é normalmente aspirado. É mudo quando inicia
palavras seguido de n: knife []; know []; knee []; knight
[]; knock []
L soa como em português no início de sílabas; em final de sílaba, soa como [].
é mudo quando seguido de k em palavras como: talk; walk; stalk; folk
M soa como em português e é pronunciado no fim da sílaba: sum [] ; gum
[]; aim [].
N soa como em português e é pronunciado no fim da sílaba: sun [] ; can
[]
P soa como em português, mas é normalmente aspirado.
Q como K.
R soa []. Porém, talvez por comodidade, dicionários como Collins, Oxford e
Longman usam o símbolo [], já que em inglês padrão não existe um som []
fonêmico.
S soa como em português, mas não segue as mesmas regras quanto à
pronúncia [] ou []. Exemplos: assassin []; rising []; possession
[]; possessive []
Tem som [] em palavras como “vision”, “usual”, “pleasure”, “leisure”, e tem
som [] em palavras como “session”, obsession”, “mission”
T soa como em português, mas normalmente é aspirado. Só soa [] em casos
como “question” []. Juntamente com i, soa [] em palavras como “nation” [],
“action” []
V soa como em português.
W soa como u de água. é mudo antes de –r: write []; wrist []
X soa [], em palavras como “fox”, “wax”; soa [] em palavras como “exam”
[], “example” [], “auxiliary” []. Soa [] na palavra Xerox
[].
Y soa [] – como i em sábio.
Z soa como em português.
CH soa como t de tipo na pronúncia carioca: cheese []; chalk []; chase
[]. Em algumas palavras, soa []: Christ []; chord; chorus; chemistry.
Em palavras de origem francesa, soa []: machine [].
GH soa como um G normal em início de sílaba: ghost []. Soa []: laugh;
laughter; cough; ou é mudo: high; thigh; Hugh; night.
PH soa []: telephone; elephant; pharmacy
SH soa []: she; shy; shame; sheep; ship
TH soa [] em palavras como: thigh []; think []; three []; throw [].
Soa [] em palavras como: they []; the []; weather []; mother []

*/
