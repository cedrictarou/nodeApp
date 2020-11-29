//バリデーション
const { check } = require('express-validator');

const validatedItems = [
  check('userPassword')
    .isLength({ min: 6 })
    .withMessage('7文字以上のパスワードを設定してください。'),
  check('userConfirmPassword').custom((value, { req }) => {
    if (value !== req.body.userPassword) {
      throw new Error('パスワードが一致しません。');
    }
    return true;
  }),
];

module.exports = validatedItems;
