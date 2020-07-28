const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});

router.get("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/resume.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
});

module.exports = router;
