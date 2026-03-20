import express from "express";
import { deleteUser, getUsers, updateUserRole } from "../controller/users.js";

const router = express.Router();

router.get("/", getUsers);
router.put("/:id/role", updateUserRole);
router.delete("/:id", deleteUser);

export default router;