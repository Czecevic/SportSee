import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { PerformanceProps } from "../interfaces/interfaces";

export const Performance: React.FunctionComponent<PerformanceProps> = (
  props
) => {
  const { performanceDataArray } = props;
  return (
    <RadarChart
      outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
      width={500}
      height={500}
      data={performanceDataArray}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        dy={4}
        tickLine={false}
        tick={{
          fontSize: 12,
          fontWeight: 500,
        }}
      />
      <Radar
        dataKey="value.value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
