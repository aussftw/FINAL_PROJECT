const Discount = require("../models/Discount");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addDiscount = (req, res, next) => {
  Discount.findOne({ name: req.body.name }).then(discount => {
    if (discount) {
      return res
        .status(400)
        .json({ message: `Discount with name "${discount.name}" already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newDiscount = new Discount(queryCreator(initialQuery));

      newDiscount
        .save()
        .then(discount => res.json(discount))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.getDiscounts = (req, res, next) => {
  Discount.find()
    .then(discounts => res.json(discounts))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
