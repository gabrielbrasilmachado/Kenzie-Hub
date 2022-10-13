import { Route, Routes } from "react-router-dom";
import { TechProvider } from "../contexts/TechContext";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route
      path="/dashboard"
      element={
        <TechProvider>
          <Dashboard></Dashboard>
        </TechProvider>
      }
    ></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
  </Routes>
);
