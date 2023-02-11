import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
