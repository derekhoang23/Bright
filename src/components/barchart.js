import React, {Component} from 'react';
import {connect } from 'react-redux';
import barstyles from '../bar.css';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

//TODO: chnage data with portfolio data
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];



class DemoBar extends Component {
	render () {
    const result1 = Object.keys(this.props.portfolio).map(key => {
      return {name: key, Current: this.props.portfolio[key], Target: this.props.portfolioChange[key]}
    })
    console.log('bar', result1)
  	return (
    	<BarChart width={800} height={600} data={result1}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Current" fill="#8884d8" />
       <Bar dataKey="Target" fill="#82ca9d" />
      </BarChart>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.portfolio,
    portfolioChange: state.portfolioChange
  }
}

export default connect(mapStateToProps)(DemoBar);
