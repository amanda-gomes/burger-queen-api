const models = require('../models');
const Users = models.Users;

const getUsers = (req, resp) => {
  Users.findAll()
    .then(users => resp.status(201).send(users));
}

const getUserById = (req, resp) => {
  Users.findOne({ where: { id: req.params.id } })
    .then(user => user ? resp.status(201).send(user) : resp.sendStatus(404));
}

const postUser = (req, resp) => {
  Users.create(req.body)
    .then(user => resp.status(201).send(user));
}

const putUser = (req, resp) => {
  Users.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Users
        .findByPk(req.params.id)
        .then(user => user ? resp.status(201).send(user) : resp.sendStatus(404));
    });
}

const deleteUser = (req, resp) => {
  Users.destroy({ where: { id: req.params.id } })
    .then(user => user ? resp.sendStatus(200) : resp.sendStatus(404));
}

module.exports = {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser
};