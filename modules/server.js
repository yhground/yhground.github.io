/*Server set up*/
module.exports.init = function (port) {
        var http = require('http');
        function handleRequest(req, rep) {
            rep.end('Request got: ', req.url);
        }
        var server = http.createServer(handleRequest);


        server.listen(port, function () {
            console.log('Server listening on: ', port);
        });
    }