const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cssValue: {
      type: String
    },
    cssStyles: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Discount = mongoose.model("discounts", DiscountSchema);
