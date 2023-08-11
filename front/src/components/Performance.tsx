/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { PerformanceProps } from "../interfaces/interfaces";

export const Performance: React.FunctionComponent<PerformanceProps> = (
  props
) => {
  const { performanceData } = props;

  // const dayLetter = ["L", "M", "M", "J", "V", "S", "D"];

  // const AverageSessionsArray = averageSessions.map(
  //   (value: string, index: number) => ({
  //     dayLetter: dayLetter[index],
  //     ...value,
  //   })
  const kindTitle = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  const performanceDataArray = performanceData.map(
    (value: { value: number; kind: number }) => ({
      title: kindTitle[value.kind - 1],
      ...value,
    })
  );
  console.log(performanceDataArray);
  return (
    <div className="performance">
      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart data={performanceDataArray}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="title"
            dy={4}
            stroke="white"
            tickLine={false}
            // tickFormatter="kind"
            tick={{
              fontSize: 10,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
