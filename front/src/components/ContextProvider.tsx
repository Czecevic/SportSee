import { createContext, useState, ReactNode } from "react";

interface FetchContextType {
  fetch: boolean;
  toggleFetch(): void;
}

export const FetchContext = createContext<FetchContextType>({
  fetch: true,
  toggleFetch: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FunctionComponent<ContextProviderProps> = ({
  children,
}) => {
  const [fetch, setFetch] = useState<boolean>(true);
  console.log(fetch);
  const toggleFetch = () => {
    setFetch(fetch === true ? false : true);
  };
  return (
    <FetchContext.Provider
      value={{
        fetch,
        toggleFetch,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
