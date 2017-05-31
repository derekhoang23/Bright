import React, { Component } from 'react';
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';
import Home from './containers/home';
import FinanceDetails from './containers/financeDetails';


import PageNotFound from './components/PageNotFound';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/details">Financial Details</NavLink>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={FinanceDetails} />
        </div>
      </BrowserRouter>
    )
  }
}
export default Routes;
