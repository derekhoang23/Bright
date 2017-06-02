import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authIn, loadUserPortfolio, loadRiskLevel} from '../actions';
import _ from 'lodash';
import json from '../users.json';
import Demo from '../components/piechart';
import styles from '../style.css';

class Home extends Component {


componentWillMount() {
 this.props.dispatch(authIn(this.props.authenticated));

}

setSliderVal() {

}

componentDidMount() {
  this.props.dispatch(loadUserPortfolio(1, json));
  this.props.dispatch(loadRiskLevel(1, json))

}

  render() {
    return(
      <div>
          Pie chart demo
          <Demo />
          <div className="range-slider">
            <input onChange={this.setSliderVal.bind(this)} className="range-slider__range" type="range" value={this.props.risklevel} min="0" max="10" />
            <span className="range-slider__value">{this.props.risklevel}</span>
          </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
    risklevel: state.risklevel
  }
}


export default connect(mapStateToProps)(Home);
