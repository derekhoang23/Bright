import React, { Component } from 'react';
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';
// import { Switch } from 'react-router';
import Home from './containers/home';
import FinanceDetails from './containers/financeDetails';
import Nav from './containers/navbar';


import PageNotFound from './components/PageNotFound';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route path='/' component={Nav} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/portfoliodetails" component={FinanceDetails} />
        </div>
      </BrowserRouter>
    )
  }
}
export default Routes;
