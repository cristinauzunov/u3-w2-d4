import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNGEzMWYwNDIwZDAwMTUxNTVhN2QiLCJpYXQiOjE3Nzc1NTY4NzEsImV4cCI6MTc3ODc2NjQ3MX0.dZtQIKya1rPQCUcxWIZkaufsK3NVOe99ccDaYX8zgHw";

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: false,
      errMsg: "",
    };
  }

  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    this.setState({ isLoading: true, errMsg: "" });
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data, isLoading: false });
      } else {
        this.setState({ errMsg: "Errore nel caricamento!", isLoading: false });
      }
    } catch (err) {
      this.setState({ errMsg: err.message, isLoading: false });
    }
  };

  deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );
      if (response.ok) {
        this.fetchComments();
      }
    } catch (err) {
      this.setState({ errMsg: err.message });
    }
  };

  render() {
    const { comments, isLoading, errMsg } = this.state;

    if (!this.props.asin) {
      return (
        <div data-testid="no-book-selected" className="text-center mt-5 text-muted">
  <p>Seleziona un libro per vedere le recensioni</p>
</div>
      );
    }

    return (
      <div className="comment-area mt-3" onClick={(e) => e.stopPropagation()}>
        <h6 className="fw-bold">Recensioni</h6>

        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="warning" />
          </div>
        )}

        {errMsg && (
          <Alert variant="danger">❌ {errMsg}</Alert>
        )}

        {!isLoading && !errMsg && (
          <>
            <CommentsList
              comments={comments}
              onDelete={this.deleteComment}
            />
            <AddComment
              asin={this.props.asin}
              onCommentAdded={this.fetchComments}
            />
          </>
        )}
      </div>
    );
  }
}

export default CommentArea;