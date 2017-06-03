import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authIn, loadUserPortfolio, loadRiskLevel, changeRisk, calculateRisk, fetchPortfolioTotal } from '../actions';
import _ from 'lodash';
import json from '../users.json';
import Demo from '../components/piechart';
import Slider from 'rc-slider';
import sliderStyle from 'rc-slider/assets/index.css';
import styles from '../style.css';

class Home extends Component {


componentWillMount() {
 this.props.dispatch(authIn(this.props.authenticated));

}

setSliderVal(val) {
  console.log('val', val);
  this.props.dispatch(changeRisk(val))

}

handleSubmit() {
    this.props.dispatch(calculateRisk(this.props.risklevel))
}

componentDidMount() {

  this.props.dispatch(loadUserPortfolio(1, json));
  this.props.dispatch(loadRiskLevel(1, json));
  this.props.dispatch(fetchPortfolioTotal(json[0].portfoliototal));
  // this.props.fetchPortfolioTotal(json[0].total);

}

  render() {
    console.log('type', typeof this.props.risklevel)
    return(
      <div className="HomeContainer">
        <div className='slider-container'>
          <Slider min={0} max={10} value={this.props.risklevel} onChange={this.setSliderVal.bind(this)}/>
          <div className='slider-value'>Risk Level: {this.props.risklevel}</div>

        </div>
        <button className='submit-risk' onClick={this.handleSubmit.bind(this)}>Submit</button>
          Pie chart demo
            <Demo />
          {/* <div className="range-slider">
            <input onChange={this.setSliderVal.bind(this)} className="range-slider__range" type="range" value={this.props.risklevel} min="0" max="10" />
            <span className="range-slider__value">{this.props.risklevel}</span>
          </div> */}
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
