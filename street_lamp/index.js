var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
    var led = new five.Led(9)
    var photoresistor = new five.Sensor({
        pin: "A0"
    });

    photoresistor.on("change", function() {
        if (this.value > 600) {
            led.on()
        } else {
            led.off()
        }
    });
})