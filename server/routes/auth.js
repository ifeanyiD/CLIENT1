import express from "express"
import { registerUser, loginUser, checkAuth} from "../controller/authController.js";
import { refreshTokenHandler } from "../config/refresher.js"
import { verifyToken } from "../config/verifyToken.js";

const router = express.Router()

router.put("/register", registerUser);
router.post("/login", loginUser);
router.get("/refresh", refreshTokenHandler);
router.get("/me", verifyToken, checkAuth);

export default router   