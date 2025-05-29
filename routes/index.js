const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", {});
});

router.get("/privacy-policy", async (req, res) => {
  res.render("privacy-policy", {});
});

router.get("/terms-of-service", async (req, res) => {
  res.render("terms-of-service", {});
});

router.get("/support", async (req, res) => {
  res.render("support", {});
});

module.exports = router;
