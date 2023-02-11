import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartMate from "../cartmate.png";
import Button from "react-bootstrap/Button";
import { UserAuth } from "../Context/AuthContext";

function NavbarComp() {
  const { user, logout } = UserAuth();

  const handleClick = () => {
    return logout();
  };

  return (
    <Navbar bg="dark" variant="dark" className="vw-100 position-absolute">
      <Container>
        <Navbar.Brand href={user ? "/dashboard" : "/"}>
          <img alt="" src={CartMate} width="65" height="65" />
        </Navbar.Brand>
        {user && (
          <div>
            <Button href="/dashboard" className="mx-3">
              Dashboard
            </Button>
            <Button onClick={handleClick}>Logout</Button>
          </div>
        )}
        {!user && (
          <div>
            <Button href="/register" className="mx-3">
              Sign Up
            </Button>
            <Button href="/login">Login</Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
