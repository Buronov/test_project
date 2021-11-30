const fs = require("fs");
const express = require("express");
const router = express.Router();

// create data for our server
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

// router.get("/", (req, res) => {
//   console.log("/");
//   res.end("you are connected");
// });
router.get("/author", (req, res) => {
  console.log("/author");
  res.render("author", { user: user });
});
router.get("/contact", (req, res) => {
  console.log("/contact");
  res.render("contact", {user: user});
});
router.get("/home", (req, res) => {
  console.log("/home");
  res.render("store", { user: user });
});

module.exports = router;
