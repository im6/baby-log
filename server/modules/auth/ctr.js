
var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = {
    main: function(req, res, next){
        console.log('main');
        res.sendFile('/public/main/index.html',{ root: appDir });
    },
    login: function(req, res, next){
        console.log('login');
        res.sendFile('/public/main/error.html',{ root: appDir });
    },
    register: function(req, res, next){
        console.log('register');
        res.sendFile('/public/main/error.html',{ root: appDir });
    },
    error: function(req, res, next){
        console.log('error');
        res.sendFile('/public/main/error.html',{ root: appDir });
    }
};