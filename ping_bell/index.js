var five = require('johnny-five')
var board = new five.Board()
var dgram = require("dgram");
board.on('ready', function () {
    var piezo = new five.Piezo(8)
    var s = dgram.createSocket('udp4')
    s.bind(1337)

    s.on('message', function () {
        piezo.play({
            song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
            beats: 1 / 4,
            tempo: 100
        });
    })


})