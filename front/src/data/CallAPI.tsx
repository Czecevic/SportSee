import axios from "axios";
import { useState, useEffect } from "react";

interface UserData {
  data: object;
  firstName: string;
  lastName: string;
  age: number;
}

export const UseUserData = (id: string | undefined, endpoint: string) => {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserData>(
          `http://localhost:3000/user/${id}/${endpoint}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Réinitialisez à null en cas d'erreur
      }
    };

    fetchData();
  }, [id, endpoint]);

  return data;
};

export const GetUserData = (id: string | undefined) => UseUserData(id, "");
export const GetUserActivityData = (id: string) => UseUserData(id, "activity");
export const GetUserAverageSessionData = (id: string) => UseUserData(id, "average-sessions");
export const GetUserPerformanceData = (id:string) => UseUserData(id, "performance");