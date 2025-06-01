const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", {});
});

router.get("/support", async (req, res) => {
  res.render("support", {});
});

module.exports = router;
