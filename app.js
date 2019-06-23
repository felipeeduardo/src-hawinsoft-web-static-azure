var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3800));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function (req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'https') {
        res.sendFile(__dirname + '/dist/index.html')
    } else {
        next();
    }
});

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log(' Server running... in ' + port)
})