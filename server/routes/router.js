const express = require('express');
const route = express.Router();
const { homeRoute, addUser, updateUser } = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */

route.get('/', homeRoute);

/**
 * @description Add Users
 * @method GET /add-user
 */

route.get('/add-user', addUser);

/**
 * @description Update Users
 * @method GET /update-user
 */

route.get('/update-user', updateUser);

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;
