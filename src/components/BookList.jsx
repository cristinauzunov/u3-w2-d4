import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

function BookList({ books }) {
  const [search, setSearch] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="books-section">
      <Container fluid>
        <h2 className="section-title">Il Nostro Catalogo</h2>
        <p className="section-subtitle">
          Sfoglia la nostra selezione di titoli
        </p>

        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar mb-4"
        />

        <Row>
          <Col md={8}>
            <Row xs={2} sm={3} md={3} className="g-3">
              {filteredBooks.map((book) => (
                <Col key={book.asin}>
                  <SingleBook
                    book={book}
                    isSelected={selectedAsin === book.asin}
                    onSelect={setSelectedAsin}
                  />
                </Col>
              ))}
            </Row>
            {filteredBooks.length === 0 && (
              <p className="text-center mt-4 text-muted">
                Nessun libro trovato per "{search}"
              </p>
            )}
          </Col>

          <Col md={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BookList;