import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {authIn, loadUserPortfolio, loadRiskLevel, changeRisk, calculateRisk, fetchPortfolioTotal } from '../actions';
import _ from 'lodash';
import json from '../users.json';
import Demo from '../components/piechart';
import Table from '../components/table';
import Slider from 'rc-slider';
import sliderStyle from 'rc-slider/assets/index.css';
import styles from '../style.css';

class Home extends Component {


componentWillMount() {
 this.props.dispatch(authIn(this.props.authenticated));

}

setSliderVal(val) {
  this.props.dispatch(changeRisk(val))
  this.props.dispatch(calculateRisk(val));
}


componentDidMount(prevProps) {
  console.log('prev', prevProps)
  this.props.dispatch(loadUserPortfolio(1, json));
  this.props.dispatch(loadRiskLevel(1, json));
  this.props.dispatch(fetchPortfolioTotal(json[0].portfoliototal));

}

  render() {
    return(
      <div className="HomeContainer">
        <div className="table-title">
          <h3>Portfolio</h3>
        </div>
        <Table />
        <div className='slider-container'>
          <Slider min={1} max={10} value={this.props.risklevel} onChange={this.setSliderVal.bind(this)}/>
          <div className='slider-value'>Risk Level: {this.props.risklevel}</div>

        </div>
        <Link className='submit-risk' to='/portfoliodetails'> Submit</Link>
        <Demo />

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    portfolioChange: state.portfolioChange,
    portfolioTotal: state.portfolioTotal,
    authenticated: state.authenticated,
    risklevel: state.risklevel
  }
}


export default connect(mapStateToProps)(Home);
