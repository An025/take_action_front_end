import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Label,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
import './ChartStyles.scss';
import 'animate.css';



 const LineBarComposedChart = (props) => {

    return (
        <div className="barchartcontainer">
            <p className="animate__animated animate__rubberBand">Your CO2 production in kg vs the average production</p>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
/*                 width={500}
                height={400} */
                data={ props.data }
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="yourCO2" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="avgCO2" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineBarComposedChart;
