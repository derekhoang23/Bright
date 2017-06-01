import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authIn, loadUserPortfolio} from '../actions';
import _ from 'lodash';
import json from '../users.json';

class Home extends Component {

componentWillMount() {
 this.props.dispatch(authIn(this.props.authenticated));
}

componentDidMount() {
  this.props.dispatch(loadUserPortfolio(1, json))
}

  render() {
    return(
      <div>
          Hello World from Home Container!!ffrf4234324
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {authenticated: state.authenticated}
}


export default connect(mapStateToProps)(Home);
