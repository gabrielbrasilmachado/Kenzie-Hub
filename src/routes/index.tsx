import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
  </Routes>
);
