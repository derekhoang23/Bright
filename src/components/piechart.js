import React, { Component } from 'react';
import {connect } from 'react-redux';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
  Label, LabelList } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { changeNumberOfData } from './utils';
import _ from 'lodash';

const colors = scaleOrdinal(schemeCategory10).range();

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
];


const renderLabelContent = (props) => {
  const { value, percent, x, y, midAngle, payload } = props;
  return (
    <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
      <text x={0} y={0}>{`$${value}`}</text>
      <text x={0} y={20}>{`${payload.name}: ${(percent * 100).toFixed(2)}%`}</text>
    </g>
  );
};

class Demo extends Component {

  render () {
    const result1 = Object.keys(this.props.portfolioChange).map(key => {
            return {name: key, value: this.props.portfolioChange[key]}
          })

    return (
      <div className="pie-charts">
        <br/>
        <div className="pie-chart-wrapper">
          <PieChart width={1200} height={800} >
            <Legend />
            <Pie
              data={result1}
              dataKey="value"
              cx={800}
              cy={300}
              startAngle={180}
              endAngle={-180}
              innerRadius={100}
              outerRadius={200}
              label={renderLabelContent}
            >
              {
                data02.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                ))
              }
              <Label width={50} position="center">
                Investments
              </Label>
            </Pie>
          </PieChart>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.portfolio,
    portfolioChange: state.portfolioChange
  }
}


export default connect(mapStateToProps)(Demo);
