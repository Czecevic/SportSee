import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users } from "./pages/DashBaord";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { ContextProvider } from "./components/ContextProvider";

export const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/:id" element={<Users />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};
