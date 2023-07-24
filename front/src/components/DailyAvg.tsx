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
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface DailyAvgProps {
  averageSessions: {
    map: any;
    day: number | string;
    sessionLength: number;
  };
}

// day : {averageSession.day} session :{" "}
// {averageSession.sessionLength}
export const DailyAvg: React.FunctionComponent<DailyAvgProps> = (props) => {
  const { averageSessions } = props;
  const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];

  const AverageSessionsArray = averageSessions.map(
    (value: string, index: number) => ({
      dayLetter: dayLetter[index],
      ...value,
    })
  );
  // console.log(AverageSessionsArray);
  return (
    <>
      <h1>Durée moyenne des sessions</h1>
      <LineChart
        width={258}
        height={263}
        data={AverageSessionsArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="dayLetter" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};
