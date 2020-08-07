const router = require('express').Router();

router.get("/test", (req, res) => {
    res.send("Yeah nice")
})

module.exports = router;