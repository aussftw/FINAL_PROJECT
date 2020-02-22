const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const sendMail = require("../commonHelpers/mailSender");
const validateOrderForm = require("../validation/validationHelper");
const queryCreator = require("../commonHelpers/queryCreator");
const productAvailibilityChecker = require("../commonHelpers/productAvailibilityChecker");
const subtractProductsFromCart = require("../commonHelpers/subtractProductsFromCart");
const _ = require("lodash");

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1000000, 9999999);

exports.placeOrder = async (req, res, next) => {
  try {
    const order = _.cloneDeep(req.body);
    order.orderNo = String(rand());
    let cartProducts = [];

    if (req.body.deliveryAddress) {
      order.deliveryAddress = JSON.parse(req.body.deliveryAddress);
    }

    if (req.body.shipping) {
      order.shipping = JSON.parse(req.body.shipping);
    }

    if (req.body.paymentInfo) {
      order.paymentInfo = JSON.parse(req.body.paymentInfo);
    }

    if (req.body.customerId) {
      order.customerId = req.body.customerId;

      cartProducts = await subtractProductsFromCart(order.customerId);
    }

    if (!req.body.products && cartProducts.length < 1) {
      res
        .status(400)
        .json({ message: "The list of products is required, but absent!" });
    }

    if (cartProducts.length > 0) {
      order.products = _.cloneDeep(cartProducts);
    } else {
      order.products = JSON.parse(req.body.products);
    }

    order.totalSum = order.products.reduce(
      (sum, cartItem) =>
        sum + cartItem.product.currentPrice * cartItem.cartQuantity,
      0
    ).toFixed(2);

    const productAvailibilityInfo = await productAvailibilityChecker(
      order.products
    );

    if (!productAvailibilityInfo.productsAvailibilityStatus) {
      res.json({
        message: "Some of your products are unavailable for now",
        productAvailibilityInfo
      });
    } else {
      const products = order.products.map(item => {
        const subtotal = item.product.currentPrice*item.cartQuantity;
        return `<div style='width: 500px;height: 40px;display: flex;align-items: center;justify-content: space-between;
                   margin: 0 auto;'>
                 <a href=http://plantlyshop.herokuapp.com/products/${item.product.itemNo} style='text-decoration: none'>
                   <img src=${item.product.imageUrls[0]} alt=${item.product.name} style='height: 40px;object-fit:cover'/>
                 </a> 
                 <a href=http://plantlyshop.herokuapp.com/products/${item.product.itemNo} style='text-decoration:none;margin:10px;width:240px;'>
                   <span style='min-width: 220px;font-size:12px;line-height:24px;margin:10px;color:black;text-transform:capitalize'>
                     ${item.product.name}
                   </span>           
                 </a> 
                 <p style='font-size:12px; text-align: right;margin:10px;'>
                   <span style='font-size:12px; line-height: 24px; margin:10px 20px;color: black; text-transform:capitalize'>
                     Quantity: ${item.cartQuantity} 
                   </span>  
                   <span style='font-size:12px; line-height: 24px; margin:10px 20px;color: black; text-transform:capitalize'>
                     $${subtotal}
                   </span>  
                 </p>
               </div>`
      }).join('');

      const subscriberMail = req.body.email;
      const letterSubject = req.body.letterSubject;
      const letterHtml = `<div style="width: 600px;padding: 25px 30px 32px 27px;margin: 0 auto;color: black;">
                            <div style="width: 600px;">
                              <a href="http://plantlyshop.herokuapp.com/">
                                <img style="padding: 5px;margin: 10px auto; width: 100px; height: 50px; display: block;"
                                src="https://res.cloudinary.com/plantly/image/upload/v1582145267/logo_muwchw.png" alt="logo"/>
                              </a>
                            </div>
                            <h2 style="font-size: 28px; line-height: 32px; padding-bottom: 15px; font-weight: normal;margin: 0;color: black;">
                              Hello, ${order.name}. Thank you for your order!
                            </h2>
                            <p style="font-size: 15px; line-height: 24px; margin: 0;color: black;text-align: justify;">
                              Your application is accepted. Order № is ${order.orderNo}.
                              You can track the status of your order in your account.
                              View order details - go to: <br/>
                              http://plantlyshop.herokuapp.com/orders/${order.orderNo}.
                              <p style="font-size: 15px;padding-bottom: 22px; line-height: 24px; margin: 0;color: black;text-align: justify;">
                              While you’re there, you might be interested in other products, as they go well with your order.
                              ${req.body.letterHtml} Thank you once again!
                              </p>
                            </p>
                            ${products}
                            <div style='width:500px;height:40px;display:flex;align-items:center;justify-content:space-between;margin:0 auto;'>
                              <span style='font-size:14px;font-weight: 600;line-height: 24px; margin:10px 300px 10px 20px;color:black;'>
                                Total
                              </span>  
                              <span  style='font-size:14px;font-weight: 600;line-height: 24px; margin:10px 80px 10px 20px;color:black;text-align: right';>
                                $${order.totalSum}
                              </span>
                            </div>
                          </div>`;

      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
        });
      }

      const newOrder = new Order(order);

      if (order.customerId) {
        newOrder.populate("customerId").execPopulate();
      }

      newOrder
        .save()
        .then(async order => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res
          );

          res.json({ order, mailResult });
        })
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }
};

exports.updateOrder = (req, res, next) => {

  Order.findOne({ _id: req.params.id }).then(async currentOrder => {
    if (!currentOrder) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found` });
    } else {
      const order = _.cloneDeep(req.body);

      if (req.body.deliveryAddress) {
        order.deliveryAddress = JSON.parse(req.body.deliveryAddress);
      }

      if (req.body.status) {
        order.status = req.body.status;
      }

      if (req.body.shipping) {
        order.shipping = JSON.parse(req.body.shipping);
      }

      if (req.body.paymentInfo) {
        order.paymentInfo = JSON.parse(req.body.paymentInfo);
      }

      if (req.body.customerId) {
        order.customerId = req.body.customerId;
      }

      if (req.body.products) {
        order.products = JSON.parse(req.body.products);

        order.totalSum = order.products.reduce(
          (sum, cartItem) =>
            sum + cartItem.product.currentPrice * cartItem.cartQuantity,
          0
        );

        const productAvailibilityInfo = await productAvailibilityChecker(
          order.products
        );

        if (!productAvailibilityInfo.productsAvailibilityStatus) {
          res.json({
            message: "Some of your products are unavailable for now",
            productAvailibilityInfo
          });
        }
      }

      // const letterSubject = req.body.letterSubject;
      // const subscriberMail = req.body.email;
      // const letterHtml = req.body.letterHtml;
      const subscriberMail = currentOrder.email;
      const letterSubject = "Your order was changed";
      const letterHtml = `<div style="width: 600px;padding: 25px 30px 32px 27px;margin: 0 auto;color: black;">
                            <div style="width: 600px;">
                              <a href="http://plantlyshop.herokuapp.com/">
                                <img style="padding: 5px;margin: 10px auto; width: 100px; height: 50px; display: block;"
                                src="https://res.cloudinary.com/plantly/image/upload/v1582145267/logo_muwchw.png" alt="logo"/>
                              </a>
                            </div>
                            <h2 style="font-size: 28px; line-height: 32px; padding-bottom: 15px; font-weight: normal;margin: 0;color: black;">
                              Hello, ${currentOrder._doc.name}.
                            </h2>
                            <p style="font-size: 15px;padding-bottom: 22px; line-height: 24px; margin: 0;color: black;text-align: justify;">
                              Your order №${currentOrder.orderNo} was changed. Now the status of your order is ${order.status}.
                              You can track the status of your order in your account.
                              View order details - go to:  <br/>http://plantlyshop.herokuapp.com/orders/${currentOrder.orderNo}.
                            </p>
                          </div>`;
      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
        });
      }

      Order.findOneAndUpdate(
        { _id: req.params.id },
        { $set: order },
        { new: true }
      )
        .populate("customerId")
        .then(async order => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res
          );

          res.json({ order, mailResult });
        })
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.cancelOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async currentOrder => {
    if (!currentOrder) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found` });
    } else {
      const subscriberMail = currentOrder.email;
      const letterSubject = "Your order was canceled";
      const letterHtml = `<div style="width: 600px;padding: 25px 30px 32px 27px;margin: 0 auto;color: black;">
                            <div style="width: 600px;">
                              <a href="http://plantlyshop.herokuapp.com/">
                                <img style="padding: 5px;margin: 10px auto; width: 100px; height: 50px; display: block;"
                                src="https://res.cloudinary.com/plantly/image/upload/v1582145267/logo_muwchw.png" alt="logo"/>
                              </a>
                            </div>
                            <h2 style="font-size: 28px; line-height: 32px; padding-bottom: 15px; font-weight: normal;margin: 0;color: black;">
                              Hello, ${currentOrder._doc.name}.
                            </h2>
                            <p style="font-size: 15px;padding-bottom: 22px; line-height: 24px; margin: 0;color: black;text-align: justify;">
                               Your order №${currentOrder.orderNo} was canceled. We will be glad to see new orders from you!
                            </p>
                          </div>`;
      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
        });
      }

      Order.findOneAndUpdate(
        { _id: req.params.id },
        { canceled: true },
        { new: true }
      )
        .populate("customerId")
        .then(async order => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res
          );

          res.json({ order, mailResult });
        })
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};
exports.deleteOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async order => {
    if (!order) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found.` });
    } else {
      const orderToDelete = await Order.findOne({ _id: req.params.id });

      Order.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Order witn id "${orderToDelete._id}" is successfully deletes from DB. Order Details: ${orderToDelete}`
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

exports.getAllOrders = (req, res, next) => {
  const newestOrders = {"date":-1};
  Order.find()
    .sort(newestOrders)
    .then(orders => {
      if (orders) {
        return res.json(orders);
      }
      return res.json([]);
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getActiveOrders = (req, res, next) => {
  const newestOrders = {"date":-1};
  Order.find({ canceled: false })
    .sort(newestOrders)
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getOrders = (req, res, next) => {
  Order.find({ customerId: req.user.id })
    .populate("customerId")
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getOrder = (req, res, next) => {
  Order.findOne({ orderNo: req.params.orderNo, customerId: req.user.id })
    .populate("customerId")
    .then(order => {
      res.json(order);
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
