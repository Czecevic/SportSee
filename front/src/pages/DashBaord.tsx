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
import { User } from "../components/User";
import { Activity } from "../components/Activity";
import { DailyAvg } from "../components/DailyAvg";
import { Performance } from "../components/Performance";
import { FetchContext } from "../components/ContextProvider";
import { useContext } from "react";
export const Users = () => {
  // declaration des constantes
  const { fetch } = useContext(FetchContext);
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
    kind: performancesKind[index + 1],
    value,
  }));
  return (
    <section>
      <Navbar />
      <div className="DashBoard">
        {/* Utilisateur */}
        <h1>Bonjour {userData?.data.userInfos.firstName}</h1>
        <h2>{fetch}</h2>
        <section className="DashBoardBodyAndGraph">
          <div className="DashBoardBody">
            {/* les caractéristiques de l'utilisateur */}
            <User body={body} />
          </div>
          <div className="DashBoardGraph">
            {/* activité */}
            <Activity activitys={activitys} />
            <div className="Graph">
              {/* activité quotidienne */}
              <Performance performanceDataArray={performanceDataArray} />
              {/* moyenne session par jour du membre sélectionnée */}
              <DailyAvg averageSessions={averageSessions} userId={Number(id)} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
