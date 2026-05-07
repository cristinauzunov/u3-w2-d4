import { ListGroup, Button } from "react-bootstrap";

function SingleComment({ comment, onDelete }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div>
        <span className="fw-bold">{"★".repeat(comment.rate)}</span>
        <p className="mb-0">{comment.comment}</p>
      </div>
      <Button variant="danger" size="sm" onClick={() => onDelete(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
}

export default SingleComment;