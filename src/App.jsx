import "./styles/global.js";
import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext.jsx";
import { TechProvider } from "./contexts/TechContext.jsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      <UserProvider>
        <TechProvider>
          <RoutesMain></RoutesMain>
        </TechProvider>
      </UserProvider>
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
