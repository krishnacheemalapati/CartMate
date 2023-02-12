import "./App.css";
import Button from "./components/Button";
import cart from "../src/cartmate.png";
import Home from "./components/Home";
import { AuthContextProvider } from "./AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Home />
      </AuthContextProvider>
    </div>
  );
}

export default App;
