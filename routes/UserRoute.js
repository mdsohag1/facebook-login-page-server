import express from "express";
import { signup } from "../controllers/UserControler.js";

const router = express.Router();

//get a user
router.post("/signup", signup);

export default router;
