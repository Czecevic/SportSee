import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { PerformanceProps } from "../interfaces/interfaces";

export const Performance: React.FunctionComponent<PerformanceProps> = (
  props
) => {
  const { performanceDataArray } = props;
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={performanceDataArray}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <Radar
        dataKey="value.value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
