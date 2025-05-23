const AdminAccount = require("../../model/admin-account.model")
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

module.exports.registerPost = async (req, res) => {
  const existAccount = await AdminAccount.findOne({
    email: req.body.email
  })
  if (existAccount) {
    res.json({
      code: "error",
      message: "Email đã tồn tại trong hệ thống!"
    })
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  const newRecord = new AdminAccount({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashPassword,
    status: "initial"
  });
  await newRecord.save();

  res.json({
    code: "success",
    message: "Đăng ký thành công!"
  })
}

module.exports.loginPost = async (req, res) => {
  const existAccount = await AdminAccount.findOne({
    email: req.body.email
  })
  if (!existAccount) {
    res.json({
      code: "error",
      message: "Email không tồn tại trong hệ thống!"
    });
    return;
  }
  if (!bcrypt.compareSync(req.body.password, existAccount.password)) {
    res.json({
      code: "error",
      message: "Mật khẩu không chính xác!"
    });
    return;
  }

  const token = jwt.sign(
    {
      id: existAccount.id,
      email: existAccount.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d'
    }
  );

  res.cookie("token", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict"
  });

  res.json({
    code: "success",
    message: "Đăng nhập thành công!"
  })
}