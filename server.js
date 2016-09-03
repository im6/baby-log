var path = require('path');
var express = require('express'),
bodyParser = require('body-parser');

var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

//var env = process.env.ENVIRONMENT;
var env = 'dev';

app.set('x-powered-by', false);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./server/modules/main/route'));
app.use('/auth', require('./server/modules/auth/route'));

app.listen(server_port, server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", server_port " + server_port + '...' );
});