import express from "express";
import { body, validationResult } from "express-validator";
import { userController } from "../controllers/index.js";
import user from "../controllers/user.js";
const router = express.Router();
router.get("/:id", userController.getDetailUser);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  userController.login
  //them /login de post login user
);

router.post("/register", userController.register);
export default router;
