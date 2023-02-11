import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { AuthContextProvider, UserAuth } from "./Context/AuthContext";

function App() {
  // const { user, logout } = UserAuth();

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
