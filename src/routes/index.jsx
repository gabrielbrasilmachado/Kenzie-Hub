import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = ({ user, setUser }) => (
  <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route
      path="/dashboard"
      element={<Dashboard user={user} setUser={setUser}></Dashboard>}
    ></Route>
    <Route path="*" element={<h1>Page not found</h1>}></Route>
  </Routes>
);
