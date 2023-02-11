import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartMate from "../cartmate.png"

function BrandExample() {
    return (
        <>


            <Navbar bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="#home" >
                        <img
                            alt=""
                            src={CartMate}
                            width="65"
                            height="65"
                        />{' '}
                        CartMate
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;