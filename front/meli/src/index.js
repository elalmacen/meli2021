import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route } from "react-router-dom";
import Ecommerce from './views/layouts/Ecommerce';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" render={(props) => <Ecommerce {...props} />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);