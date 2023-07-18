/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { useParams } from "react-router-dom";
import { GetUserData, GetUserActivityData } from "../data/CallAPI";
import { KeyData } from "../interfaces/interfaces";
import { Navbar } from "../components/Navbar";
import { useDataContext } from "../components/DataContext";

export const Users = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const userData = GetUserData(id)
  if (!userData) {
    return <li>...loading</li>;
  }
  const body: KeyData = {
    calorie: userData?.data.keyData?.calorieCount ?? 0,
    protein: userData?.data.keyData?.proteinCount ?? 0,
    carbohydrate: userData?.data.keyData?.carbohydrateCount ?? 0,
    lipid: userData?.data.keyData?.lipidCount ?? 0,
  };
  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      <ul>
        <li>
          {userData?.data.userInfos.firstName}, {userData?.data.userInfos.lastName}
        </li>
        <li>{userData?.data.userInfos.age}</li>
      </ul>
      <h1>tu as bruler</h1>
      <ul>
        <li>calories : {body.calorie} kCal</li>
        <li>Glucides : {body.carbohydrate}g</li>
        <li>Lipides : {body.lipid}g</li>
        <li>Proteines : {body.protein}g</li>
      </ul>
    </div>
  );
};
