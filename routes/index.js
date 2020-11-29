const router = require('express').Router();
const userController = require('../controller/userController.js');
const validatedItems = require('../lib/validation/validate.js');

router.get('/', (req, res) => {
  const currentUser = req.query.userName || '';
  res.render('index.ejs', { currentUser });
});

router.get('/login', (req, res) => {
  res.render('account/login.ejs');
});

router.get('/register', (req, res) => {
  res.render('account/register.ejs');
});

// ユーザーを登録する処理
router.post('/create', validatedItems, userController.registUser);

// logoutの処理
router.post('/logout', userController.logout);

module.exports = router;
