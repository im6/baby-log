var express = require('express'),
    router = express.Router(),
    ctr = require("./ctr");

router.get('/',ctr.main);

router.get(ctr.error);

module.exports = router;