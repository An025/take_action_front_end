import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import "./PieChart.scss"
// import { GradientPinkBlue } from '@visx/gradient';

const coins = [
  { name: "railway", percent: 0.5, color: "#0033ad" },
  { name: "water navigation", percent: 13.6, color: "#00ffbd" },
  { name: "other", percent: 0.5, color: "#F7931A"},
  { name: "cars", percent: 60.7, color: "#33ACFF"},
  { name: "motorcycles", percent: 1.2, color: "#4AD608"},
  { name: "civil aviation", percent: 13.4, color: "#D39C14"},
  { name: "heavy duty trucks", percent: 26.2, color: "#C00EC2"},
  { name: "light duty trucks", percent: 26.2, color: "#11089D"},
];





const Piechart = props => {


  const [active, setActive] = useState(null);
  const width = 250;
  const half = width / 2;




  return (
    <div className="piechart-main">
      {/* <GradientPinkBlue id="visx-pie-gradient" /> */}
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={ coins }
            pieValue={(data) => data.percent}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.name === data.name ? 20 : 18;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.name}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`${active.percent}`}
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.name}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`$${Math.floor(
                  coins.reduce((acc, coin) => acc + coin.percent, 0)
                )}`}
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`Drag over!`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </div>
  );
}

export default Piechart;