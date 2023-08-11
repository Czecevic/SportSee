import React, { useState } from "react";
import {
  FetchContextType,
  ContextProviderProps,
} from "../interfaces/interfaces";

export const FetchContext = React.createContext<FetchContextType>({
  fetch: "api",
  setFetch: () => {},
});

export const ContextProvider: React.FunctionComponent<ContextProviderProps> = ({
  children,
}) => {
  const [fetch, setFetch] = useState<string>("api");
  return (
    <FetchContext.Provider
      value={{
        fetch,
        setFetch: (value) => setFetch(value),
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
