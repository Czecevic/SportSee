import { ReactNode } from "react";

export interface UserData {
  firstName: string;
  lastName: string;
  age: number;
}

export interface KeyData {
  calorie: number;
  carbohydrate: number;
  lipid: number;
  protein: number;
}

export interface DataContextProps {
  userData: UserData | null;
  keyData: KeyData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  setKeyData: React.Dispatch<React.SetStateAction<KeyData | null>>;
}

export interface PerformanceProps {
  performanceDataArray: {
    kind: string;
    value: {
      value: number;
      kind: number;
    };
  };
}

export interface FetchContextType {
  fetch: string;
  setFetch: (value: string) => void;
}

export interface ContextProviderProps {
  children: ReactNode;
}
