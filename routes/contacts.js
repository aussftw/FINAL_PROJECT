const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
    addContact,
    updateContact,
    deleteContact,
    getContacts
} = require("../controllers/contacts");

// @route   POST /contacts
// @desc    Create new contact
// @access  Private
router.post(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    addContact
);

// @route   PUT /contacts
// @desc    Update existing contact
// @access  Private
router.put(
    "/:id",
    passport.authenticate("jwt-admin", { session: false }),
    updateContact
);

// @route   DELETE /contacts/:id
// @desc    DELETE existing contact
// @access  Private
router.delete(
    "/:id",
    passport.authenticate("jwt-admin", { session: false }),
    deleteContact
);

// @route   GET /contacts
// @desc    GET existing contact
// @access  Public
router.get("/", getContacts);

module.exports = router;