import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute to="/">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
