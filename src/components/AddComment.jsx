import { Component } from "react";
import { Form, Button } from "react-bootstrap";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNGEzMWYwNDIwZDAwMTUxNTVhN2QiLCJpYXQiOjE3Nzc1NTY4NzEsImV4cCI6MTc3ODc2NjQ3MX0.dZtQIKya1rPQCUcxWIZkaufsK3NVUe99ccDaYX8zgHw";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      rate: "3",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify({
            comment: this.state.comment,
            rate: this.state.rate,
            elementId: this.props.asin,
          }),
        },
      );
      if (response.ok) {
        this.setState({ comment: "", rate: "3" });
        this.props.onCommentAdded(); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-3">
        <Form.Group className="mb-2">
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Scrivi una recensione..."
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option value="1">★ 1</option>
            <option value="2">★★ 2</option>
            <option value="3">★★★ 3</option>
            <option value="4">★★★★ 4</option>
            <option value="5">★★★★★ 5</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="warning" size="sm" className="w-100">
          Pubblica recensione
        </Button>
      </Form>
    );
  }
}

export default AddComment;
