import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";

const router = express.Router(); // Correct initialization of the router

router.post("/signup", signup); // This line is fine
router.post("/signin", signin); // This line is fine

export default router;
