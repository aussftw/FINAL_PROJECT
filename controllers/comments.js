const Comment = require("../models/Comment");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addComment = (req, res, next) => {
  const commentData = _.cloneDeep(req.body);
  commentData.customer = req.user.id;
  const newComment = new Comment(queryCreator(commentData));

  newComment
    .populate("product")
    .populate("category")
    .populate("customer")
    .execPopulate();

  newComment
    .save()
    .then(comment => res.json(comment))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.updateComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then(comment => {
      if (!comment) {
        return res.status(400).json({
          message: `Comment with _id "${req.params.id}" is not found.`
        });
      } else {
        const commentData = _.cloneDeep(req.body);
        const updatedComment = queryCreator(commentData);

        Comment.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedComment },
          { new: true }
        )
          .populate("product")
          .populate("category")
          .populate("customer")
          .then(comment => res.json(comment))
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

exports.deleteComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id }).then(async comment => {
    if (!comment) {
      return res.status(400).json({
        message: `Comment with id "${req.params.id}" is not found.`
      });
    } else {
      const commentToDelete = await Comment.findOne({
        _id: req.params.id
      });

      Comment.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Comment witn id "${commentToDelete._id}" is successfully deletes from DB.`,
            deletedCommentInfo: commentToDelete
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

exports.getComments = async (req, res, next) => {
    let total;
    try {
        total = await Comment.find().count();
    } catch (err) {
        res.status(400).json({
            message: `Error happened on server: "${err}" `
        });
    }

    const perPage = Number(req.query.perPage);
    const startPage = Number(req.query.startPage);
    const newestComments = {"date": -1};

  Comment.find()
    .sort(newestComments)
    .skip(startPage * perPage - perPage)
    .limit(perPage)
    .populate("product")
    .populate("category")
    .populate("customer")
    .then(comments => {
        res.status(200).json({
            "page": startPage,
            "total": total,
            "comments": comments,
        })
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getCustomerComments = (req, res, next) => {
  Comment.find({ customer: req.params.customerId })
    .populate("product")
    .populate("category")
    .populate("customer")
    .then(comments => res.status(200).json(comments))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getProductComments = (req, res, next) => {
  const newestComments = {"date": -1};
  Comment.find({ product: req.params.productId })
    .populate("product")
    .populate("category")
    .populate("customer")
    .sort(newestComments)
    .then(comments => res.status(200).json(comments))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
