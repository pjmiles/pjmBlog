const router = require("express").Router()
// const Blog = require('../model/Blog');


router.get("/", (req, res) => {
    res.send("/")
})

module.exports = router;