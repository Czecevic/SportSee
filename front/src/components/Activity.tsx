import React from "react";
import { BarChart, XAxis, Tooltip, Legend, Bar, CartesianGrid } from "recharts";

interface ActivityProps {
  activitys: {
    day: string;
    kilogram: number;
    calories: number;
  };
}

const CustomTooltip = ({ kilogram, payload, poids }: any) => {
  if (kilogram && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="poids">{`${poids}`}</p>
      </div>
    );
  }
};

export const Activity: React.FunctionComponent<ActivityProps> = (props) => {
  const { activitys } = props;
  const ActivitysArray = activitys.map((value, index) => ({
    index: index + 1,
    ...value,
  }));

  console.log(ActivitysArray);
  return (
    <div className="DailyActivityContainer">
      <div className="TitleAndLegend">
        <div className="DailyActivityTitle">Activité quotidienne</div>
        <div className="DailyActivityLegend">
          <div className="LegendDetail">
            <span
              className="ColorLegend"
              style={{
                background: "#2b2d30",
              }}
            ></span>
            <p>Poids (kg)</p>
          </div>
          <div className="LegendDetail">
            <span
              className="ColorLegend"
              style={{
                background: "#ff0101",
              }}
            ></span>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <BarChart
        width={1000}
        height={400}
        margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
        barGap={8}
        data={ActivitysArray}
        barCategoryGap="35%"
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke={`#dedede`}
        />
        <XAxis
          dataKey="index"
          dy={16}
          stroke="#9b9eac"
          padding={{ left: -18, right: -48 }}
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
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
    </div>
  );
};
