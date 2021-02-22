const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')


routes.get('/', Usuario.index);

// Rotas de Usuários
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);
routes.post('/api/usuarios/login', Usuario.login);
routes.get('/api/usuarios/checktoken', Usuario.checkToken);
routes.get('/api/usuarios/destroyToken', Usuario.destroyToken);

module.exports = routes;