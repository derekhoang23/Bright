import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increaseRisk, fetchRiskLevel} from '../actions';
import _ from 'lodash';

class Home extends Component {

  renderLevel() {
    return _.map(this.props.riskLevel, level => {
        return (
          <div>{level}</div>
        )
    })
  }

  increaseLevel() {
    this.props.increaseRisk();
  }

  render() {
    return(
      <div>
          Hello World from Home Container!!
          {this.renderLevel()}
          <button onClick={this.increaseLevel.bind(this)}>Increase</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {riskLevel: state.riskLevel}
}

export default connect(mapStateToProps, {increaseRisk, fetchRiskLevel})(Home);
