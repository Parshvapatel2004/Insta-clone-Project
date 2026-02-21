const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { log } = require("console");

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;
  const validUser = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (validUser) {
    return res.status(409).json({
      message:
        "User is already there with this details" +
        " " +
        (validUser.email == email
          ? "Email Already exists"
          : "Username alread exists"),
    });
  }
  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered Successfully",
    user: {
      email: user.email,
      username: user.username,
      profileImage: user.profileImage,
      bio: user.bio,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({
    $or: [
      { username: username },
      {
        email: email,
      },
    ],
  });
  if (!user) {
    return res.status(409).json({
      message: "Invalid username or email",
    });
  }
  const isCorrectPass = await bcrypt.compare(password, user.password);
  if (!isCorrectPass) {
    return res.status(409).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User logged in Successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}
async function getMeController(req, res) {
  const userId = req.user.id;
  const user = await userModel.findById(userId);

  res.status(200).json({
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
  registerController,
  loginController,
  getMeController,
};
