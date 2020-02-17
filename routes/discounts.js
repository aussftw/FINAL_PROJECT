const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addDiscount,
  getDiscounts
} = require("../controllers/discounts");

// @route   POST /sizes
// @desc    Create new size
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addDiscount
);

// @route   GET /sizes
// @desc    GET existing sizes
// @access  Public
router.get("/", getDiscounts);

module.exports = router;
