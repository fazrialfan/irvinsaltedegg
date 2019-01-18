const Product = require("../models/productModel")

module.exports = {
  add: (req, res, next) => {
    try {
      module.exports.validateAdd(req.body);

      let product = new Product({
        name: req.body.name,
        price: req.body.price
      });


      product.save(function (err) {
        if (err) {
          return next(err);
        }

        res.status(201).send({
          data: product
        })
      })
    } catch (e) {
      let status = 422;
      let message = e;

      if (typeof e == 'object') {
        message = e.message;
      }

      res.status(status).send({
        message: message
      })
    }
  },
  update: (req, res, next) => {
    Product.findById(req.params.productId, (err, doc) => {
      if (err) {
        return next(err)
      }

      if (req.body.name) {
        doc.name = req.body.name;
      }

      if (req.body.price) {
        doc.price = req.body.price;
      }

      doc.save((err, product) => {
        res.status(200).send({
          data: product
        });
      });
    });
  },
  find: (req, res, next) => {
    Product.findById(req.params.productId, (err, product) => {
      res.status(200).send({ data: product });
    });
  },
  findAll: (req, res, next) => {
    Product.find({}, (err, product) => {
      res.status(200).send({ data: product });
    });
  },
  remove: (req, res, next) => {
    Product.findByIdAndRemove(req.params.productId, (err, product) => {
      res.status(200).send({
        data: [product.id]
      });
    });
  },
  isNumeric: (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
  validateAdd: (params) => {
    if (typeof params.name == 'undefined' || params.name == '') {
      throw ('Name is required');
    }

    if (typeof params.price == 'undefined') {
      throw ('Price is required');
    }

    if (!module.exports.isNumeric(params.price)) {
      throw ('Price should be a number');
    }
  }
};