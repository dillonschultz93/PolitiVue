var exec = require('child_process').exec;


var api = exec('nodemon server.js');

api.stdout.pipe( process.stdout );
api.stderr.pipe( process.stderr );

var webpack = exec('webpack --watch');

webpack.stdout.pipe( process.stdout );
webpack.stderr.pipe( process.stderr );

var dev = exec('webpack-dev-server --open --watch-poll');

dev.stdout.pipe( process.stdout );
dev.stderr.pipe( process.stderr );