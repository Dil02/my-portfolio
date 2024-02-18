import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const PageNavbar = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand className='display-3'><Nav.Link href="/"><em>DP</em></Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><Navbar.Brand className='display-3'><Nav.Link href="/"><em>DP</em></Nav.Link></Navbar.Brand></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/Gallery">Gallery</Nav.Link>
                            <Nav.Link href="/Projects">Projects</Nav.Link>
                            <Nav.Link href="/Resources">Resources</Nav.Link>
                            <Nav.Link href="/Skills">Skills</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}