import { useState } from "react";
import { Link } from "react-router-dom";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </header>
      <RoutesMain setIsLogin={setIsLogin} />
    </div>
  );
}

export default App;
