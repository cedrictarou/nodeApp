const { validationResult } = require('express-validator');

let currentUser;
//ユーザーを変える処理
const changeUser = body => {
  return (currentUser = {
    name: body.userName,
    email: body.userEmail,
    password: body.userPassword,
  });
};

//ログアウトの処理
const logout = (req, res, next) => {
  currentUser = {
    name: '',
    email: '',
    password: '',
  };
  res.redirect('/');
};

// 新規ユーザーを登録する処理
const registUser = (req, res, next) => {
  const inputData = changeUser(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //エラーメッセージズを表示できる形に整形する
    const errors_msg = errors.array().map(obj => obj.msg);
    res.render('account/register.ejs', {
      inputData,
      errors_msg,
    });
    return;
  }
  //エラーなければ
  changeUser(req.body);
  res.redirect(`/?userName=${currentUser.name}`);
};

module.exports = {
  registUser,
  logout,
};
