const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/index.html"))
});

router.get("/portfolio", (req, res) => {

});

router.get("/resume", (req, res) => {
    
});

router.get("/contact", (req, res) => {
    
});

module.exports = router;
