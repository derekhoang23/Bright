import React, { Component } from 'react';
import DemoBar from '../components/barchart';
import {connect} from 'react-redux';
import {updatePortfolio, portfolioChange} from '../actions';
class PortfolioDetails extends Component {

  updatePortfolio() {
    console.log('this', this.props.portfolioChange)
    this.props.dispatch(updatePortfolio(this.props.portfolioChange))
  }

  render() {
    return(
      <div className='portfolio-details-container'>
          <DemoBar className='bar-chart' />
          <div className='portfolio-details-message'>
            <h3>Suggestions for Portfolio</h3>
            <p className='portfolio-suggestion-body'>
              You can see your Current Allocation to your Target Allocation. The target allocation is driven by your questions and how the market dictates your input.
              This text area should be filled with more stuff, but I don't know what to write.
            </p>
            <p className='portfolio-submit'>In order to match your target allocation, please submit the changes. Your portfolio will update.</p>
            <button className='portfolio-button' href='/' onClick={this.updatePortfolio.bind(this)}>Submit</button>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    portfolioChange: state.portfolioChange
  }
}


export default connect(mapStateToProps)(PortfolioDetails);
