/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from "react-router-dom";
import {
  GetUserData,
  GetUserActivityData,
  GetUserAverageSessionData,
  GetUserPerformanceData,
} from "../data/CallAPI";
import { KeyData } from "../interfaces/interfaces";
import { Navbar } from "../components/Navbar";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
export const Users = () => {
  // declaration des constantes
  const { id } = useParams<{ id: string | undefined }>();
  const userData = GetUserData(id);
  const userActivityData = GetUserActivityData(id);
  const userAverageSessionData = GetUserAverageSessionData(id);
  const userPerformanceData = GetUserPerformanceData(id);

  if (
    !userData ||
    !userActivityData ||
    !userAverageSessionData ||
    !userPerformanceData
  ) {
    return <div>Loading...</div>;
  }

  const activitys = userActivityData?.data.sessions;
  const averageSessions = userAverageSessionData?.data.sessions;
  const performancesKind = userPerformanceData?.data.kind;
  const performancesData = userPerformanceData?.data.data;

  // console.log(activitys);
  const body: KeyData = {
    calorie: userData?.data.keyData?.calorieCount ?? 0,
    protein: userData?.data.keyData?.proteinCount ?? 0,
    carbohydrate: userData?.data.keyData?.carbohydrateCount ?? 0,
    lipid: userData?.data.keyData?.lipidCount ?? 0,
  };

  const performanceDataArray = performancesData.map((value, index) => ({
    kind: performancesKind[index],
    value,
  }));

  console.log(activitys);
  /* 
    poids = noir
    calories = rouge
    nombre = jour
  */
  return (
    <div>
      <Navbar />
      {/* Utilisateur */}
      <h1>Bonjour {userData?.data.userInfos.firstName}</h1>
      {/* les caractéristiques de l'utilisateur */}
      <ul className="user">
        <li>
          <img />
          <h3>{body.calorie} kCal</h3>
          <p>calories</p>
        </li>
        <li>
          <img />
          <h3>{body.carbohydrate}g</h3>
          <p>Glucides</p>
        </li>
        <li>
          <img />
          <h3>{body.lipid}g</h3>
          <p>Lipides</p>
        </li>
        <li>
          <img />
          <h3>{body.protein}g</h3>
          <p>Proteines</p>
        </li>
      </ul>
      {/* activité */}
      <BarChart
        width={500}
        height={300}
        data={activitys}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="index" />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#8884d8" />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
      {/* activité quotidienne */}
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
    </div>
  );
};
/* <h1>Users</h1>
      <h1>tu as bruler</h1>
      {activitys.map((activity, index) => {
        return (
          <ul key={index}>
            <li>
              calorie :{activity.calories}, day : {activity.day}, kilo :{" "}
              {activity.kilogram}
            </li>
          </ul>
        );
      })}
      {averageSessions.map((averageSession, index) => {
        return (
          <ul key={index}>
            <li>
              day : {averageSession.day} session :{" "}
              {averageSession.sessionLength}
            </li>
          </ul>
        );
      })} */
