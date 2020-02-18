const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
    {
        option: {
            type: String,
            required: true
        },
        content: [
            {
                text: {
                    type: String,
                    required: true
                },
                link: {
                    type: String
                }
            },
        ],
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = Contact = mongoose.model("contacts", ContactSchema);