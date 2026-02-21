const express = require("express");
const userController = require("../controller/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const userRouter = express.Router();

// @route POST /api/users/follow/:userId
//@description : follow a user
// @acccess : Private
userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.userFollowController,
);

// @route POST /api/users/unfollow/:userId
//@description : unfollow a user
// @acccess : Private

userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.userUnfollowController,
);



// accept / reject follow request
userRouter.patch(
  "/followStatus/:username",
  identifyUser,
  userController.followStatusController
);


module.exports = userRouter;
