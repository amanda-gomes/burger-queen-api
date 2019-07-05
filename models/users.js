'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Orders, {foreignKey: 'user_id'})  
  };
  // Users.create({name:'Amanda',email:'amacrisgomes@hotmail.com',type:'cozinha'})
  // Users.create({name:'Lucas',email:'lucas_silva.ct@hotmail.com',type:'salao'})
  
  return Users;
};