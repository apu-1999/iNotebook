var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json([]);
})

module.exports = router;