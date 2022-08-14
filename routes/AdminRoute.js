import express from "express";
import { allUsers, signin } from "../controllers/AdminController.js";

const router = express.Router();

//get a user
router.post("/adminLogin", signin);
//get a user
router.get("/allUsers", allUsers);

export default router;
