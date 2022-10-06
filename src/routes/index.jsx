import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = ({ isLoggedIn, setIsLoggedIn }) => (
  <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route
      path="/register"
      element={
        <Register
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        ></Register>
      }
    ></Route>
    <Route path="/dashboard"></Route>
    <Route path="*" element={<h1>Page not found</h1>}></Route>
  </Routes>
);
