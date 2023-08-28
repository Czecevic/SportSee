/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
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
import { FetchContext } from "../Context/ContextProvider";
import { SideBar } from "../components/SideBar";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";
import { TotalScore } from "../components/TotalScore";

export const DashBoard = () => {
  // Récupérer les données de contexte
  const { fetch } = useContext(FetchContext);
  const { id } = useParams<{ id: string | undefined }>();

  // Définir les données en fonction de la source (api ou mock)
  let userData, userActivityData, userAverageSessionData, userPerformanceData;
  let activitys, averageSessions, performancesData, scoreData;

  if (fetch === "api") {
    userData = GetUserData(id);
    userActivityData = GetUserActivityData(id);
    userAverageSessionData = GetUserAverageSessionData(id);
    userPerformanceData = GetUserPerformanceData(id);

    if (
      !userData ||
      !userActivityData ||
      !userAverageSessionData ||
      !userPerformanceData
    ) {
      console.error("aucune donnée trouvé");
      return <div>Loading...</div>;
    }

    activitys = userActivityData?.data.sessions;
    averageSessions = userAverageSessionData?.data.sessions;
    performancesData = userPerformanceData?.data.data;
    scoreData = id === "12" ? userData.data.todayScore : userData.data.score;
  } else {
    const dataIndex = id === "18" ? 1 : 0;
    userData = USER_MAIN_DATA[dataIndex];
    userActivityData = USER_ACTIVITY[dataIndex];
    userAverageSessionData = USER_AVERAGE_SESSIONS[dataIndex];
    userPerformanceData = USER_PERFORMANCE[dataIndex];
    if (
      !userData ||
      !userActivityData ||
      !userAverageSessionData ||
      !userPerformanceData
    ) {
      console.error("aucune donnée trouvé");
      return <div>Loading...</div>;
    }

    activitys = userActivityData.sessions;
    averageSessions = userAverageSessionData.sessions;
    performancesData = userPerformanceData.data;
    // scoreData = userData.keyData.score;
    scoreData = id === "12" ? userData.todayScore : userData.score;
  }

  // Données communes pour le corps
  const body: KeyData = {
    calorie:
      fetch == "api"
        ? userData.data.keyData.calorieCount
        : userData.keyData.calorieCount,
    protein:
      fetch == "api"
        ? userData.data.keyData.proteinCount
        : userData.keyData.proteinCount,
    carbohydrate:
      fetch == "api"
        ? userData.data.keyData.carbohydrateCount
        : userData.keyData.carbohydrateCount,
    lipid:
      fetch == "api"
        ? userData.data.keyData.lipidCount
        : userData.keyData.lipidCount,
  };

  return (
    <section>
      <Navbar />
      <div className="SideBarAndDashBoard">
        <SideBar />
        <div className="DashBoard">
          <h1>
            Bonjour{" "}
            <span style={{ color: "red" }}>
              {fetch == "api"
                ? userData.data.userInfos.firstName
                : userData.userInfos.firstName}
            </span>{" "}
            <span className="dataOrigin">
              (data from {fetch === "api" ? "l'api" : "le mock"})
            </span>
          </h1>
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          <section className="DashBoardBodyAndGraph">
            <div className="DashBoardGraph">
              <Activity activitys={activitys} />
              <div className="Graph">
                <DailyAvg averageSessions={averageSessions} />
                <Performance performanceData={performancesData} />
                <TotalScore scoreData={scoreData} />
              </div>
            </div>
            <div className="DashBoardBody">
              <User body={body} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
