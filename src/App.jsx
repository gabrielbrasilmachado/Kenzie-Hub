import { useState } from "react";
import "./styles/global.js";
import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <GlobalStyle />
      <RoutesMain
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      ></RoutesMain>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
