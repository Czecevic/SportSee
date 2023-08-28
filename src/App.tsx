import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashBoard } from "./pages/DashBoard";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { ContextProvider } from "./context/ContextProvider";

export const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/:id" element={<DashBoard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};
