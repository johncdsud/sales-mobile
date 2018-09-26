var http = require('http');
var server = require('./config/server');

http.createServer(server).listen(server.get('port'), function() {
    console.log('Express escutando na porta ' + server.get('port'));
});      