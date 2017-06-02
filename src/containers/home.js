import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authIn, loadUserPortfolio, loadRiskLevel} from '../actions';
import _ from 'lodash';
import json from '../users.json';
import Demo from '../components/piechart';
import Slider from 'react-rangeslider';

class Home extends Component {


componentWillMount() {
 this.props.dispatch(authIn(this.props.authenticated));
}

setSliderVal() {

}

componentDidMount() {
  this.props.dispatch(loadUserPortfolio(1, json))
  this.props.dispatch(loadRiskLevel(1, json))
}

  render() {
    return(
      <div>
        <div>
          <Slider
            max={10}
            onChange={this.setSliderVal()}
          />
        </div>
          Pie chart demo
          <Demo>

          </Demo>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {authenticated: state.authenticated}
}


export default connect(mapStateToProps)(Home);
