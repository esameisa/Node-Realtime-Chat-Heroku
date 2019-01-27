var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//set port
var port = process.env.PORT || 3000

app.use(express.static(__dirname + "/public/index.html"));

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

//route
app.get("/", function (req, res) {
    res.render("index");
});

app.listen(port, function () {
    console.log('listening on *:' + port);
})

// http.listen(port, function () {
//     console.log('listening on *:' + port);
// });