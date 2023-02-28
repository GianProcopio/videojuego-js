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
I-XX--XXXX
X---X-XXX
X-XXX-XXXX
X-XXX-XXXX
X--XXXXXXX
X-X-XXXXXX
X-X--XXXX
X-XX-XXXXX
X----XXXXX
O-XXXXXXXX
`);

maps.push(`
  I-X---XXXX
  X---X-XXX
  XXXXX-XXXX
  XXXXX-XXXX
  XX----XXXX
  XXX-XXXXXX
  XXX--XXXX
  X-XX-XXXXX
  X----XXXXX
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