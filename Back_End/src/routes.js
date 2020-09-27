const { Router } = require('express');
const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/users', UserController.get);

module.exports = routes;