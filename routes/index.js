const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("./index.ejs");
});
router.get("/login", (req, res) => {
    res.render("./account/login.ejs");
});
router.get("/register", (req, res) => {
    res.render("./account/register.ejs");
});
module.exports = router;