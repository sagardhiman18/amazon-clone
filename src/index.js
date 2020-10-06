import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Home from './screens/home';
import CheckOut from './screens/checkout';
import Login from './screens/login';
import Register from './screens/register';
import reducer from "./redux/reducer";

const store = createStore(reducer);

const headerroutes = (
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/checkout" component={CheckOut}></Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
);

ReactDOM.render(headerroutes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
