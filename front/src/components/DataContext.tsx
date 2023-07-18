import React, { createContext, useContext, useState } from "react";
import { KeyData, UserData } from "../interfaces/interfaces";
import { DataContextProps } from "../interfaces/interfaces";

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FunctionComponent<DataContextProps> = ({
  children
}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [keyData, setKeyData] = useState<KeyData | null>(null);

  return (
    <DataContext.Provider
      value={{ userData, setUserData, keyData, setKeyData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
    const context = useContext(DataContext)
    if(!context) {
        console.error('raté')
    }
    return context
}
