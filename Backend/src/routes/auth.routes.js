const express = require("express");
const authcontroller = require("../controller/auth.controller");
const identifyUser = require('../middlewares/auth.middleware')

const authRouter = express.Router();

authRouter.post("/register", authcontroller.registerController);
authRouter.post("/login", authcontroller.loginController);
authRouter.get('/get-me',identifyUser,authcontroller.getMeController)

module.exports = authRouter;
