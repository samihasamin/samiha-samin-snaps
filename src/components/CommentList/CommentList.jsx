import { useState, useEffect } from "react";
import "./CommentList.scss";
import axios from "axios";

function CommentList({ id, comments }) {
  console.log(comments);

  function commentDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  return (
    <>
      <section className="comments">
        <ul className="comments__list">
          <h3>{comments.length} Comments</h3>
          {comments.map((comment) => {
            return (
              <li className="comments__list-comment">
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
                <p>{commentDate(comment.timestamp)}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default CommentList;
