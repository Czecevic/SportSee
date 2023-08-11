/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pie, ResponsiveContainer, PieChart } from "recharts";

export const TotalScore: React.FunctionComponent = (props) => {
  const { scoreData } = props;
  const pourcentScoreData = scoreData * 100;

  const BarChartData = [
    {
      total: 100,
      score: pourcentScoreData,
    },
  ];
  return (
    <div className="Score">
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart width={160} height={160}>
          <Pie
            data={BarChartData}
            dataKey="score"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            label
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
