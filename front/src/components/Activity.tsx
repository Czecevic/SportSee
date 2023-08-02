import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
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
      <div className="DailyActivityTitle">Activité quotidienne</div>
      <div className="DailyActivityLegend">
        <p className="LegendDetail">
          <span className="ColorLegend">Poids (kg)</span>
        </p>
        <p className="LegendDetail">
          <span className="ColorLegend">Calories brûlées (kCal)</span>
        </p>
      </div>
      <BarChart
        width={835}
        height={320}
        margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
        barGap={8}
        data={ActivitysArray}
        barCategoryGap="35%"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="index"
          dy={16}
          padding={{ left: -18, right: -48 }}
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <Tooltip
          cursor={{
            fill: "rgba(0,0,0,0.1)",
          }}
        />
        <Legend />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          maxBarSize={8}
          fill="#282D30"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          maxBarSize={8}
          fill="#E60000"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
      </BarChart>
    </>
  );
};
