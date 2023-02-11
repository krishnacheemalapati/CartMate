import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartMate from "../cartmate.png";
import Button from "react-bootstrap/Button";
import { UserAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

function NavbarComp() {
  const { user, logout } = UserAuth();

  const handleClick = () => {
    return logout();
  };

  return (
    <Navbar bg="dark" variant="dark" className="vw-100 position-absolute">
      <Container>
        <Link to={user ? "/dashboard" : "/"}>
          <Navbar.Brand>
            <img alt="" src={CartMate} width="65" height="65" />
            CartMate
          </Navbar.Brand>
        </Link>
        {user && (
          <div>
            <Link to="/dashboard">
              <Button className="mx-3">Dashboard</Button>
            </Link>
            <Button onClick={handleClick}>Logout</Button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/register">
              <Button className="mx-3">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
