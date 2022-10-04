import { useState } from "react";
import "./styles/global.js";
import { GlobalStyle } from "./styles/global";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <GlobalStyle />
    </div>
  );
}

export default App;
