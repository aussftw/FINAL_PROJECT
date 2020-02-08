const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  createCustomer,
  loginCustomer,
  getCustomer,
  editCustomerInfo,
  editCustomerAdmin,
  updatePassword,
  getCustomers
} = require("../controllers/customers");

// @route   GET /customers
// @desc    Register customer
// @access  Public
router.get("/", getCustomers);


// @route   POST /customers
// @desc    Register customer
// @access  Public
router.post("/", createCustomer);

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
router.post("/login", loginCustomer);

// @route   GET /
// @desc    Return current customer
// @access  Private
router.get(
  "/customer",
  passport.authenticate("jwt", { session: false }),
  getCustomer
);

// @route   PUT /customers
// @desc    Return current customer
// @access  Private
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  editCustomerInfo
);

// @route   POST /customers/profile/update-password
// @desc    Return current customer and success or error message
// @access  Private
router.put(
  "/password",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

// @route   PUT /customers/:id
// @desc    Update existing customer
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  editCustomerAdmin
);

module.exports = router;
