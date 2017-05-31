import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increaseRisk} from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.increaseRisk();
  }

  render() {
    return(
      <div>
          Hello World from Home Container!!! 
      </div>
    )
  }
}

export default connect(null, {increaseRisk})(Home);
