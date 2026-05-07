import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentsList({ comments, onDelete }) {
  return (
    <ListGroup className="mt-2">
      {comments.length === 0 && (
        <p className="text-muted text-center">Nessuna recensione ancora!</p>
      )}
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          onDelete={onDelete}
        />
      ))}
    </ListGroup>
  );
}

export default CommentsList;
