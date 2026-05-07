import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="my-footer">
      <Container>
        <Row className="py-4 align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <p className="footer-tagline">Ogni libro è un viaggio.</p>
          </Col>

          <Col md={4} className="text-md-end">
            <p className="footer-copy">
              Library © {new Date().getFullYear()}
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
