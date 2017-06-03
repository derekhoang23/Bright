import React, { Component } from 'react';
import {connect } from 'react-redux';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
  Label, LabelList } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { changeNumberOfData } from './utils';

const colors = scaleOrdinal(schemeCategory10).range();

// const data01 = [
//   { name: 'Group A', value: 400, v: 89 },
//   { name: 'Group B', value: 300, v: 100 },
//   { name: 'Group C', value: 200, v: 200 },
//   { name: 'Group D', value: 50, v: 20 },
//   { name: 'Group E', value: 278, v: 40 },
//   { name: 'Group F', value: 189, v: 60 },
// ];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
];
//
// const data03 = [
//   { name: 'A1', value: 100 },
//   { name: 'A2', value: 300 },
//   { name: 'B1', value: 100 },
//   { name: 'B2', value: 80 },
//   { name: 'B3', value: 40 },
//   { name: 'B4', value: 30 },
//   { name: 'B5', value: 50 },
//   { name: 'C1', value: 100 },
//   { name: 'C2', value: 200 },
//   { name: 'D1', value: 150 },
//   { name: 'D2', value: 50 },
//   { name: 'E1', value: 200 },
//   { name: 'E2', value: 34 },
//   { name: 'E3', value: 44 },
//   { name: 'F1', value: 89 },
//   { name: 'F2', value: 49 },
//   { name: 'F3', value: 51 },
// ];


const renderLabelContent = (props) => {
  const { value, percent, x, y, midAngle, payload } = props;
  return (
    <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
      <text x={0} y={0}>{`$${value}`}</text>
      <text x={0} y={20}>{`${payload.name}: ${(percent * 100).toFixed(2)}%`}</text>
    </g>
  );
};
// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
//     fill, payload, percent } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';
//
//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${500},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
//         {`Count ${payload.value}`}
//       </text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(percent: ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

class Demo extends Component {


  // componentDidMount() {
  //   console.log('what', this.props.portfolio);
  //   // this.props.portfolio().map((val, index) => {
  //   //   console.log('val', val, 'in', index)
  //   // })
  // }
  //
  // onPieEnter = (data, index) => {
  //   this.setState({
  //     activeIndex: index,
  //   });
  // };
  //
  // state = {
  //   ...initilaState,
  //   activeIndex: 0,
  // };
  //
  // handleChangeData = () => {
  //   this.setState(() => _.mapValues(initilaState, changeNumberOfData));
  // };

  render () {
    // const { data02 } = this.state;
    console.log('whattt', this.props.portfolio);
    const result = Object.keys(this.props.portfolio).map(key => {
      return {name: key, value: this.props.portfolio[key]}
    })
    console.log('resu', result);
    _.map(Object.keys(this.props.portfolio), (entry, index) => {
      //  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>

    })
    return (
      <div className="pie-charts">
        {/* <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a> */}
        <br/>
        <p className='pie-chart-title' >Portfolio</p>
        <div className="pie-chart-wrapper">
          <PieChart width={1200} height={800} >
            <Legend />
            <Pie
              data={result}
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
  return {portfolio: state.portfolio}
}


export default connect(mapStateToProps)(Demo);
