/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pie, ResponsiveContainer, PieChart, Cell } from "recharts";
// /**
//  * explication fonction
//  * @param {Number} a explication
//  * @param {String} b explication
//  */
// const func = (a: Number, b: String) => {

// }

export const TotalScore: React.FunctionComponent = (props) => {
  const { scoreData } = props;
  // const pourcentScoreData = scoreData * 100;
  console.log(scoreData);
  const BarChartData = [
    {
      value: scoreData,
    },
    {
      value: 1 - scoreData,
    },
  ];
  return (
    <div className="Score">
      <h1 className="scoreTitle">Score</h1>
      <h1 className="scoreResult">{scoreData * 100} %</h1>
      <div className="titleOfScoreData">
        <h2>de votre</h2>
        <h2>objectif</h2>
      </div>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={BarChartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            cornerRadius={10}
            startAngle={90}
            endAngle={450}
          >
            <Cell fill="#ff0000" />
            <Cell fill="transparent"></Cell>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
