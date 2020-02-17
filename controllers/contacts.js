const Contact = require("../models/Contact");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addContact = (req, res, next) => {
    Contact.findOne({ name: req.body.option }).then(contact => {
        if (contact) {
            return res
                .status(400)
                .json({ message: `Contact with type "${contact.option}" already exists` });
        } else {
            const initialQuery = _.cloneDeep(req.body);
            const newContact = new Contact(queryCreator(initialQuery));

            newContact
                .save()
                .then(contact => res.json(contact))
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};

exports.updateContact = (req, res, next) => {
    Contact.findOne({ _id: req.params.id })
        .then(contact => {
            if (!contact) {
                return res
                    .status(400)
                    .json({ message: `Contact with _id "${req.params.id}" is not found.` });
            } else {
                const initialQuery = _.cloneDeep(req.body);
                const updatedContact = queryCreator(initialQuery);

                Contact.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: updatedContact },
                    { new: true }
                )
                    .then(contact => res.json(contact))
                    .catch(err =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `
                        })
                    );
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.deleteContact = (req, res, next) => {
    Contact.findOne({ _id: req.params.id }).then(async contact => {
        if (!contact) {
            return res
                .status(400)
                .json({ message: `Contact with _id "${req.params.id}" is not found.` });
        } else {
            const contactToDelete = await Contact.findOne({ _id: req.params.id });

            Contact.deleteOne({ _id: req.params.id })
                .then(deletedCount =>
                    res.status(200).json({
                        message: `Contact with type "${contactToDelete.type}" is successfully deletes from DB `
                    })
                )
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};

exports.getContacts = (req, res, next) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};
