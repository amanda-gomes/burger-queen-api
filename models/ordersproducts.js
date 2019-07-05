'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  OrdersProducts.associate = function (models) {
    OrdersProducts.belongsTo(models.Orders, { foreignKey: 'order_id' }),
    OrdersProducts.Products = OrdersProducts.belongsTo(models.Products, { foreignKey: 'product_id' })
  };
  // OrdersProducts.create({order_id:1,product_id:4,price:7,quantity:1});
  // OrdersProducts.create({order_id:1,product_id:3,price:10,quantity:1});
  // OrdersProducts.create({order_id:2,product_id:5,price:10,quantity:1});
  // OrdersProducts.create({order_id:2,product_id:11,price:5,quantity:1});
  // OrdersProducts.create({order_id:2,product_id:15,price:10,quantity:1});

  return OrdersProducts;
};