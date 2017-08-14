var av = require('tessel-av');
var os = require('os');
var http = require('http');
var fs = require('fs');
var port = 8000;
var camera = new av.Camera();
var isSomeoneThere = false
var capture = camera.capture();
var path = require('path')
//camera.capture().pipe(response);



    setTimeout(() => {
        capture = camera.capture();
    }, 5000);

    capture.on('data', function(data) {
        console.log('picture taken');
        fs.writeFile(path.join(__dirname, 'test.jpg'), data);
    });
