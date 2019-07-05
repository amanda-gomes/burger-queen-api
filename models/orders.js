'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    client: DataTypes.STRING,
    table: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.Users, {foreignKey: 'user_id'}),
    Orders.OrdersProducts = Orders.hasMany(models.OrdersProducts, {foreignKey: 'order_id'})
  };
  // Orders.create({date:'04/07/2019',time:'13:08',client:'Fabiana',table:'7',OrdersProducts:[{product_id:4,price:7,quantity:1},{product_id:3,price:10,quantity:1}],user_id:2,status:'Preparando'});
  // Orders.create({date:'04/07/2019',time:'13:11',client:'Murilo',table:'3',OrdersProducts:[{product_id:5,price:10,quantity:1},{product_id:11,price:5,quantity:1},{product_id:15,price:7,quantity:1}],user_id:1,status:'Preparando'});
  
  return Orders;
};