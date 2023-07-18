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
  const { userData, setUserData, keyData, setKeyData } = useDataContext(); 
  React.useEffect(() => {
    const AxiosUserData = () => {
        const dataCopy = GetUserData(id);
        if (dataCopy) {
            setUserData(dataCopy.data.userInfos);
            const activityData = GetUserActivityData(id)
            if(activityData) {
                setKeyData(activityData.data.keyData)
            }
        }
    };

    AxiosUserData();
  }, [id, setUserData, setKeyData])
  
  
  

  if (!userData) {
    return <li>...loading</li>;
  }
  const body: KeyData = {
    calorie: keyData?.calorieCount ?? 0,
    protein: keyData?.proteinCount ?? 0,
    carbohydrate: keyData?.carbohydrateCount ?? 0,
    lipid: keyData?.lipidCount ?? 0,
  };
  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      <ul>
        <li>
          {userData.firstName}, {userData.lastName}
        </li>
        <li>{userData.age}</li>
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
