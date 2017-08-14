'use strict';

const path = require('path');
const av = require('tessel-av');
const mp3 = path.join(__dirname, 'yoda-mudhole.mp3');
const sound = new av.Player(mp3);

sound.play();

sound.on('ended', function(seconds) {
  console.log('song started');
    sound.play();
});
