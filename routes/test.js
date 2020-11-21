const { render } = require("ejs");

const router = require("express").Router();

let data = {
  title: "テストページ",
  userName: "test user1",
};
router.get("/", (req, res) => {
  res.render("test.ejs", { data });
});

router.post("/create", (req, res) => {
  data = {
    title: "クリックされた",
    userName: "test user2",
  };
  res.redirect("/test");
});

module.exports = router;
