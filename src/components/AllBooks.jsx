import { Container, Row, Col, Card } from "react-bootstrap";
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import romance from "../data/romance.json";

const allBooks = [...scifi, ...fantasy, ...horror, ...history, ...romance]
  .filter(book => book && book.price !== undefined);

function AllBooks() {
  return (
    <section className="books-section">
      <Container>
        <h2 className="section-title">Il Nostro Catalogo</h2>
        <p className="section-subtitle">
          Sfoglia la nostra selezione di titoli imperdibili
        </p>
        <Row xs={2} sm={3} md={4} lg={5} className="g-3">
          {allBooks.map((book) => (
            <Col key={book.asin}>
              <Card className="book-card h-100">
                <Card.Img
                  variant="top"
                  src={book.img}
                  alt={book.title}
                  className="book-cover"
                />
                <Card.Body>
                  <Card.Title className="book-title">{book.title}</Card.Title>
                  <div className="book-footer d-flex justify-content-between align-items-center">
                    <span className="book-price">
                      €{Number(book.price || 0).toFixed(2)}
                    </span>
                    <span className="genre-badge-inline">{book.category}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AllBooks;
