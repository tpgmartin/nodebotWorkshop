var five = require('johnny-five')
var dnode = require('dnode')
var board = new five.Board()
board.on('ready', function () {
    var temperature = new five.Temperature({
        controller: "TMP36",
        pin: "A0"
    })
    var server = dnode({
        getTemperature : function (cb) {
            cb(temp)
        }
    })
    server.listen(1337)

    temperature.on("data", function() {
        temp = this.celsius
    })

})