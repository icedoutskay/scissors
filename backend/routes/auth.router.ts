import express from "express";
import authController from "../controllers/auth.controller";
const Router = express.Router();

Router.post("/login", authController.login);
Router.post("/register", authController.register);

export default {
	routeUrl: "auth",
	Router,
};