import "./Form.scss";
import CommentList from "../CommentList/CommentList";
import { useState, useEffect } from "react";
import axios from "axios";

function Form({ id }) {
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const API_KEY = "?api_key=e0e24dc5-d6b8-42c2-abdd-d066b7290130";

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `${BASE_URL}photos/${id}/comments${API_KEY}`
      );
      setComments(response.data.sort((a, b) => b.timestamp - a.timestamp));
    };
    fetchComments();
  }, [id]);

  const isFormValid = () => {
    if (!name || !newComment) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = event.target.name.value;
    const commentInput = { name: name, comment: newComment }; //Why is comment input an object??

    const postComment = async () => {
      const response = await axios.post(
        `${BASE_URL}photos/${id}/comments${API_KEY}`,
        commentInput,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setComments([response.data, ...comments]);
    };
    postComment();

    if (isFormValid()) {
      alert("Comment posted sucessfully");
    } else {
      // name.style.border = "2px solid #d22d2d";
      // newComment.style.border = "2px solid #d22d2d"; //Not working
      alert("Please enter all fields");
    }
  };

  return (
    <>
      <form className="snaps-form" onSubmit={handleSubmit}>
        <div className="snaps-form__name">
          <label className="snaps-form__name-label" htmlFor="name">
            Name
          </label>
          <input
            className="snaps-form__name-input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div className="snaps-form__comment">
          <label className="snaps-form__comment-label" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="snaps-form__comment-input"
            name="comment"
            id="comment"
            value={newComment}
            onChange={handleCommentInput}
          ></textarea>
        </div>
        <div className="snaps-form__button">
          <button className="snaps-form__button-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      <CommentList id={id} comments={comments} />
    </>
  );
}

export default Form;
