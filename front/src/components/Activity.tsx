import React from "react";
import {
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ActivityProps {
  activitys: {
    day: string;
    kilogram: number;
    calories: number;
  };
}

export const Activity: React.FunctionComponent<ActivityProps> = (props) => {
  const { activitys } = props;
  const ActivitysArray = activitys.map((value, index) => ({
    index: index + 1,
    ...value,
  }));
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
          data={ActivitysArray}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="index" />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" barRadius={10} />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
