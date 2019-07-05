'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.REAL
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrdersProducts, {foreignKey: 'product_id'})
  };
  // Products.create({name:'Café americano', price: '5'});
  // Products.create({name:'Café com leite', price: '7'});
  // Products.create({name:'Sanduíche de presunto e queijo', price: '10'});
  // Products.create({name:'Suco de fruta natural', price: '7'});
  // Products.create({name:'Hambúrguer simples	bovino', price: '10'});
  // Products.create({name:'Hambúrguer simples	frango', price: '10'});
  // Products.create({name:'Hambúrguer simples	vegetariano', price: '10'});
  // Products.create({name:'Hambúrguer duplo bovino', price: '15'});
  // Products.create({name:'Hambúrguer duplo frango', price: '15'});
  // Products.create({name:'Hambúrguer duplo vegetariano', price: '15'});
  // Products.create({name:'Batata frita', price: '5'});
  // Products.create({name:'Anéis de cebola', price: '5'});
  // Products.create({name:'Água 500ml', price: '5'});
  // Products.create({name:'Água 750ml', price: '7'});
  // Products.create({name:'Bebida gaseificada 500ml', price: '7'});
  // Products.create({name:'Bebida gaseificada 750ml', price: '10'});
  // Products.create({name:'Ovo', price: '1'});
  // Products.create({name:'Queijo', price: '1'});

  return Products;
};