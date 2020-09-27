const express = require('express');
const routes = require('./routes');
require('./database');
const cors = require('cors');

class App {
  constructor() {
    this.server = express();

    this.cors();
    this.middlewares();
    this.routes();
  }

  cors() {
    this.server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    this.server.use(cors());
    next();
    });
  } 

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
