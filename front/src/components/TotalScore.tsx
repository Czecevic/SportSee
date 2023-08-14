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
      <h1 className="scoreTitle">score</h1>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={BarChartData}
            dataKey="score"
            cx="50%"
            cy="50%"
            innerRadius={80}
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
