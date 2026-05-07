import { Card, Button } from "react-bootstrap";

function SingleBook({ book, isSelected, onSelect }) {
  return (
    <Card
      className="book-card h-100"
      onClick={() => onSelect(book.asin)}
      style={{
        cursor: "pointer",
        border: isSelected ? "3px solid red" : "3px solid transparent",
        transform: isSelected ? "scale(1.03)" : "scale(1)",
        transition: "all 0.2s ease",
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        className="book-cover"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="book-title">{book.title}</Card.Title>
        <Card.Text>Category: {book.category}</Card.Text>
        <Card.Text>Price: {book.price}€</Card.Text>
        <Button className="mt-auto" variant="success">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;