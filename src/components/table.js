import React, {Component} from 'react';
import {connect} from 'react-redux';

class Table extends Component {
  render() {
    return (
      <table className="table-fill">
      <thead>
      <tr>
      <th className="text-left">Investments</th>
      <th className="text-left">Amount</th>
      </tr>
      </thead>
      <tbody className="table-hover">
      <tr>
      <td className="text-left">CDs</td>
      <td className="text-left">$ {this.props.portfolioChange.cds}</td>
      </tr>
      <tr>
      <td className="text-left">Bonds</td>
      <td className="text-left">$ {this.props.portfolioChange.bonds}</td>
      </tr>
      <tr>
      <td className="text-left">Real Estate</td>
      <td className="text-left">$ {this.props.portfolioChange.realestate}</td>
      </tr>
      <tr>
      <td className="text-left">Stocks</td>
      <td className="text-left">$ {this.props.portfolioChange.stocks}</td>
      </tr>
      <tr>
      <td className="text-left">Horse Betting</td>
      <td className="text-left">$ {this.props.portfolioChange.HorseBetting}</td>
      </tr>
      <tr>
      <td className="text-left">Total</td>
      <td className="text-left">$ {this.props.portfolioTotal}</td>
      </tr>
      </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    portfolioChange: state.portfolioChange,
    portfolioTotal: state.portfolioTotal,
  }
}

export default connect(mapStateToProps)(Table);
