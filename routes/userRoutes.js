const express = require("express");
const {
    registerUser,
    loginUser,
    currentUser,
}=require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const routes = express.Router();

routes.post("/register",registerUser);

routes.post("/login",loginUser);

routes.get("/current",validateToken, currentUser);

module.exports = routes;