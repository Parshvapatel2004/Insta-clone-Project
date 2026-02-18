const express = require("express");
const authcontroller = require("../controller/auth.controller");

const authRouter = express.Router();

authRouter.post("/register", authcontroller.registerController);
authRouter.post("/login", authcontroller.loginController);

module.exports = authRouter;
