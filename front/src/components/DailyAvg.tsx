/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DailyAvgProps } from "../interfaces/interfaces";

const CustomTooltipAvg = ({ payload }: any) => {
  if (payload.length) {
    return (
      <div className="DailyAvgValue">
        <p>{`${payload[0].value}`} min</p>
      </div>
    );
  }
};
export const DailyAvg: React.FunctionComponent<DailyAvgProps> = (props) => {
  const { averageSessions } = props;
  const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];

  const AverageSessionsArray = averageSessions.map(
    (value: string, index: number) => ({
      dayLetter: dayLetter[index],
      ...value,
    })
  );
  return (
    <div className="averageSession">
      <ResponsiveContainer width="100%" aspect={1}>
        <LineChart
          outerRadius="75%"
          data={AverageSessionsArray}
          margin={{
            top: 0,
            right: 12,
            left: 12,
            bottom: 24,
          }}
        >
          <XAxis
            dataKey="dayLetter"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            stroke="#FFFFFF"
            opacity={0.6}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            hide={true}
            domain={["dataMin - 10", "dataMax + 30"]}
          />
          <Tooltip
            content={<CustomTooltipAvg />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 60,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
