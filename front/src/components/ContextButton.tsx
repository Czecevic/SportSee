/* eslint-disable @typescript-eslint/unbound-method */
import { useContext } from "react";
import { FetchContext } from "./ContextProvider";

export const ContextButton: React.FunctionComponent = () => {
  const { fetch, toggleFetch } = useContext(FetchContext);
  console.log(toggleFetch());
  return (
    <button onClick={() => toggleFetch()}>
      {fetch === true ? "api" : "mock"}
    </button>
  );
};
