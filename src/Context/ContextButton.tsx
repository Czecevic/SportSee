/* eslint-disable @typescript-eslint/unbound-method */
import { useContext } from "react";
import { FetchContext } from "./ContextProvider";

export const ContextButton = () => {
  const { fetch, setFetch } = useContext(FetchContext);
  return (
    <button
      onClick={() => setFetch(fetch === "api" ? "mock" : "api")}
      className="userButton"
    >
      Fetch
    </button>
  );
};
