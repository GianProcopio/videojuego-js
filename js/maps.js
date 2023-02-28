const emojis={
    '-':' ',
    'O':'🚪',
    'X':'💣',
    'I':'🦴',
    'PLAYER':'🐶',
    'BOMB_COLLISION':'🔥',
    'GAME_OVER':'👎',
    'WIN':'🏆',
    'HEART': '❤️'
};

const maps=[];

maps.push(`
IX---XXXXX
---X---XXX
X--XXX-XXX
X-XX---XXX
XXXX-XXXXX
XXXX---XXX
XXXXXX-XXX
XXXXXX-XXX
X------XXX
O-XXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
  maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);