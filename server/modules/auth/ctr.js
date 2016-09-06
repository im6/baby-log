
var path = require('path'),
    request = require('request');

module.exports = {
    main: function(req, res, next){
        console.log('main');
        request({
            method:'GET',
            url: 'https://api.weibo.com/oauth2/authorize',
            qs:{
                client_id: '806813820',
                redirect_uri: '173.56.208.132',
                scope: 'all',
                state: 'gzj',
                //display: '',
                //forcelogin: '',
                //language: '',
            }
        }, function(error, response, body){
            debugger;
        });


        res.render('login');
    },
    login: function(req, res, next){
        console.log('login');
        res.render('/public/main/error.html',{ root: appDir });
    },
    register: function(req, res, next){
        console.log('register');
        res.render('/public/main/error.html',{ root: appDir });
    },
    error: function(req, res, next){
        console.log('error');
        res.render('/public/main/error.html',{ root: appDir });
    }
};