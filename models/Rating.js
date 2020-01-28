const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
    {
        customerId: {
            type: Schema.Types.ObjectId,
            ref: "customers",
            required: true
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "products"
            }
        ],
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = Rating = mongoose.model(
    "rating",
    RatingSchema,
    "rating"
);
