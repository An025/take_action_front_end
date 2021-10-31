import React, { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import './ChartStyles.scss';
import 'animate.css';

// Elmúlt 6 hónapra az utazások által termelt CO2
const data01 = [
  { name: 'Group Jan', value: 400 },
  { name: 'Group Feb', value: 300 },
  { name: 'Group March', value: 300 },
  { name: 'Group Apr', value: 200 },
  { name: 'Group May', value: 200 },
  { name: 'Group June', value: 200 },
];

// Összes utazás bontása földi és légi utazásokra
const data02 = [
  { name: 'vehicleCO2', value: 600 },
  { name: 'flightsCO2', value: 2100 },
];

export default class TwoLevelPieChart extends PureComponent {

  render() {
    return (
        <div className="piechartcontainer">
            <p className="animate__animated animate__rubberBand">Your CO2 production in kg through different stats</p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
      </div>
    );
  }
}
