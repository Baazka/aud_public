const express = require("express");
const router = new express.Router();
const login = require("../controllers/login.js");
const profile = require("../controllers/profile");

router.route("/login/").post(login.post);
router.route("/profile/:id/:sysid").get(profile.get);

module.exports = router;
