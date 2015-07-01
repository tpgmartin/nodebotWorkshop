var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
    var potentiometer = new five.Sensor("A2")
    var servo = new five.Servo(9)

    potentiometer.scale(0, 10).on("change", function() {
        servo.to(this.value);
    });

})