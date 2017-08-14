'use strict';

const path = require('path');
const av = require('tessel-av');
const mp3 = path.join(__dirname, './romeo_santos_sin_filtro.mp3');
const sound = new av.Player(mp3);
sound.play();
sound.on('ended', function(seconds) {
    sound.play();
});




