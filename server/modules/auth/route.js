var express = require('express'),
    router = express.Router(),
    ctr = require("./ctr");

router.get('/',ctr.main);
router.post('/login',ctr.login);
router.post('/register',ctr.register);

router.get(ctr.error);

module.exports = router;