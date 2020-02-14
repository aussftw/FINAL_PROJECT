const Rating = require("../models/Rating");
const Product = require("../models/Product");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.createRating = (req, res, next) => {
    Rating.findOne({ customerId: req.user.id }).then(rating => {
        if (rating) {
            return res
                .status(400)
                .json({ message: `Rating for this customer is already exists` });
        } else {
            const ratingData = _.cloneDeep(req.body);
            ratingData.customerId = req.user.id;

            const newRating = new Rating(queryCreator(ratingData));

            newRating
                .populate("products")
                .populate("customerId")
                .execPopulate();

            newRating
                .save()
                .then(rating => res.json(rating))
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};

exports.addProductToRating = async (req, res, next) => {
    let productToAdd;

    try {
        productToAdd = await Product.findOne({ _id: req.params.productId });
    } catch (err) {
        res.status(400).json({
            message: `Error happened on server: "${err}" `
        });
    }

    if (!productToAdd) {
        res.status(400).json({
            message: `Product with _id (ObjectId) "${req.params.productId}" does not exist`
        });
    } else {

        // UPDATE PRODUCT RATE VALUE
        const updateProductValue = () => {
            let newProductRating;

            try {
                const newRating = ((productToAdd.rate.rating * productToAdd.rate.voters) + Number(req.body.value)) / (productToAdd.rate.voters + 1);
                newProductRating = {
                    rate: {
                        rating: (Math.round(newRating * 10000) / 10000),
                        voters: productToAdd.rate.voters + 1
                    }
                };
            } catch (err) {
                res.status(400).json({
                    message: `Error happened on server: "${err}" `
                });
            }

            // const updateProduct = queryCreator(newProductRating); //                         ??????

            Product.findOneAndUpdate(
                { _id: req.params.productId },
                { $set: newProductRating},
                { new: true }
            )
                .then(product => {
                    res.json(product)
                })
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        };
        // END

        Rating.findOne({ customerId: req.user.id })
            .then(rating => {
                if (!rating) {
                    const ratingData = {};
                    ratingData.customerId = req.user.id;
                    ratingData.products = [].concat(req.params.productId);
                    const newRating = new Rating(queryCreator(ratingData));

                    newRating
                        .populate("products")
                        .populate("customerId")
                        .execPopulate();

                    newRating
                        .save()
                        .then(rating => {
                            // res.json(rating)
                            updateProductValue();
                        })
                        .catch(err =>
                            res.status(400).json({
                                message: `Error happened on server: "${err}" `
                            })
                        );
                } else {

                    if (rating.products.includes(req.params.productId)) {
                        res.status(400).json({
                            message: "Product was added to rating list before"
                        });
                        return
                    }

                    const ratingData = {};
                    ratingData.products = rating.products.concat(
                        req.params.productId
                    );
                    const updatedRating = queryCreator(ratingData);

                     Rating.findOneAndUpdate(
                        { customerId: req.user.id },
                        { $set: updatedRating },
                        { new: true }
                    )
                        .populate("products")
                        .populate("customerId")
                        .then(rating => {
                            // res.json(rating)
                            updateProductValue();
                        })
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
    }
};

exports.deleteRating = (req, res, next) => {
    Rating.findOne({ customerId: req.body.userId }).then(async rating => {
        if (!rating) {
            return res
                .status(400)
                .json({ message: `Rating for this customer is not found.` });
        } else {
            const ratingToDelete = await Rating.findOne({
                customerId: req.body.userId
            });

            Rating.deleteOne({ customerId: req.body.userId })
                .then(deletedCount =>
                    res.status(200).json({
                        message: `Rating list with id "${ratingToDelete._id}" is successfully deleted from DB `
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

exports.getRating = (req, res, next) => {
    Rating.findOne({ customerId: req.user.id })
        .populate("products")
        .populate("customerId")
        .then(rating => {
            if (!rating) {
                // res.status(400).json({ message: `Rating does not exist` });
                res.json({products: []})
            } else {
                res.json(rating)
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};
