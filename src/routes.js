import React, { Component } from 'react';
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';
// import { Switch } from 'react-router';
import Home from './containers/home';
import PortfolioDetails from './containers/portfolioDetails';
import Nav from './containers/navbar';


import PageNotFound from './components/PageNotFound';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route path='/' component={Nav} />
            <Route exact path="/" component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path="/portfoliodetails" component={PortfolioDetails} />
        </div>
      </BrowserRouter>
    )
  }
}
export default Routes;
