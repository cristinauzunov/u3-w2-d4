import { Navbar, Nav, Container } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar expand="lg" className="my-nav" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="brand-logo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
