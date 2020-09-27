import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import PaginaErro from './pages/PaginaErro/PaginaErro';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const Rotas = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={PaginaErro} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
