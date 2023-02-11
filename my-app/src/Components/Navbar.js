import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartMate from "../cartmate.png";
import Button from "react-bootstrap/Button";

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" className="vw-100 position-absolute">
      <Container>
        <Navbar.Brand href="/">
          <img alt="" src={CartMate} width="65" height="65" /> CartMate
        </Navbar.Brand>
        <div>
          <Button href="/register" className="mx-3">
            Sign Up
          </Button>
          <Button href="/login">Login</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
