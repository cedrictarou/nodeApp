const router = require("express").Router();

let currentUser;
const changeUser = (body) => {
  return (currentUser = {
    name: body.userName,
    email: body.userEmail,
    password: body.userPassword,
  });
};
const logoutUser = () => {
  return (currentUser = {});
};
//バリデーション
const validateRegistData = (body) => {
  let isValidated = true,
    errors = {};
  const regPw = /^([a-zA-Z0-9]{7,})$/;
  if (!regPw.test(body.userPassword)) {
    isValidated = false;
    errors.userPassword = "7文字以上のパスワードを設定してください。";
  }
  if (body.userPassword !== body.userConfirmPassword) {
    isValidated = false;
    errors.userPassword = "パスワードが一致しません。";
  }
  return isValidated ? undefined : errors;
};

router.get("/", (req, res) => {
  res.render("index.ejs", { currentUser });
});

router.get("/login", (req, res) => {
  res.render("account/login.ejs", { currentUser });
});

router.get("/register", (req, res) => {
  res.render("account/register.ejs", { currentUser });
});

// ユーザーを登録する処理
router.post("/create", (req, res) => {
  const errors = validateRegistData(req.body);
  const inputData = changeUser(req.body);
  //validationをかける
  if (errors) {
    //エラーがあれば移動しない
    res.render("account/register.ejs", { inputData, errors });
    return;
  } else {
    //エラーなければ
    changeUser(req.body);
    res.redirect("/");
  }
});

// logoutの処理
router.post("/logout", (req, res) => {
  logoutUser();
  res.redirect("/");
});

module.exports = router;
