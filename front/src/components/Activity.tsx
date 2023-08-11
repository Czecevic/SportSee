import React from "react";
import {
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";

interface ActivityProps {
  activitys: {
    day: string;
    kilogram: number;
    calories: number;
  };
}

const CustomTooltip = ({ payload }: any) => {
  if (payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="poids">{`${payload[0].value}`} kg</p>
        <p className="poids">{`${payload[1].value}`} Kcal</p>
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
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          data={ActivitysArray}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="2 2"
            vertical={false}
            stroke={`#dedede`}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            orientation="left"
            hide={true}
            domain={[0, "dataMax + 30"]}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 1", "dataMax + 2"]}
          />
          <XAxis
            dataKey="index"
            dy={16}
            stroke="#9b9eac"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
