const models = require('../models');
const Orders = models.Orders;
const Users = models.Users;
const OrdersProducts = models.OrdersProducts;

const getOrders = (req, resp) => {
  Orders.findAll({
    include: [Users, { association: Orders.OrdersProducts, include: [OrdersProducts.Products] }]
  })
    .then(orders => resp.status(201).send(orders));
}

const getOrderById = (req, resp) => {
  Orders.findByPk(req.params.id, {
    include: [Users, { association: Orders.OrdersProducts, include: [OrdersProducts.Products] }]
  })
    .then(order => order ? resp.status(201).send(order) : resp.sendStatus(404));
}

const postOrder = (req, resp) => {
  Orders.create(req.body, { include: [OrdersProducts] })
    .then(order => resp.status(201).send(order));
}

const putOrder = (req, resp) => {
  Orders.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Orders
        .findByPk(req.params.id)
        .then(order => order ? resp.status(201).send(order) : resp.sendStatus(404));
    });
}

const deleteOrder = (req, resp) => {
  OrdersProducts.destroy({ where: { order_id: req.params.id } });
  Orders.destroy({ where: { id: req.params.id } })
    .then(order => order ? resp.sendStatus(200) : resp.sendStatus(404));
}

module.exports = {
  getOrders,
  getOrderById,
  postOrder,
  putOrder,
  deleteOrder
};