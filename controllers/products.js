const models = require('../models');
const Products = models.Products;

const getProducts = (req, resp) => {
  Products.findAll()
    .then(products => resp.status(201).send(products));
}

const getProductById = (req, resp) => {
  Products.findOne({ where: { id: req.params.id } })
    .then(product => product ? resp.status(201).send(product) : resp.sendStatus(404));
}

const postProduct = (req, resp) => {
  Products.create(req.body)
    .then(product => resp.status(201).send(product));
}

const putProduct = (req, resp) => {
  Products.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Products
        .findByPk(req.params.id)
        .then(product => product ? resp.status(201).send(product) : resp.sendStatus(404));
    });
}

const deleteProduct = (req, resp) => {
  Products.destroy({ where: { id: req.params.id } })
    .then(product => product ? resp.sendStatus(200) : resp.sendStatus(404));
}

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct
};