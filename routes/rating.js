const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
    createRating,
    addProductToRating,
    deleteRating,
    getRating
} = require("../controllers/rating");

// @route   POST /rating
// @desc    Create Rating
// @access  Private
router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    createRating
);

// @route   PUT /rating/:productId
// @desc    Add one product to rating
// @access  Private
router.put(
    "/:productId",
    passport.authenticate("jwt", { session: false }),
    addProductToRating
);

// @route   DELETE /rating
// @desc    Delete all rating rec for customer
// @access  Private
router.delete(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    deleteRating
);

// @route   GET /rating
// @desc    Get rating for customer
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }),
    getRating);

module.exports = router;