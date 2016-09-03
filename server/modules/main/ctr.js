
var path = require('path'),
    appDir = path.dirname(require.main.filename),
    weibo = require('weibo');


var appKey = 806813820,
    secret = 'f6fde63f41dabc0c3f77c006044b0807',
    oauthCallback = 'baidu.com';

weibo.init('weibo', appKey, secret, oauthCallback);

var user = { blogtype: 'weibo' };
var cursor = {count: 20};
weibo.public_timeline(user, cursor, function (err, statuses) {
    if (err) {
        console.error(err);
    } else {
        console.log(statuses);
    }
});

module.exports = {
    main: function(req, res, next){
        console.log('main1');

        res.render('index');
    },
    error: function(req, res, next){
        console.log('error1');
        res.sendFile('/public/main/error.html',{ root: appDir });
    }
};