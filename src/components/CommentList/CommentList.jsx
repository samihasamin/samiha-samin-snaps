import { useState, useEffect } from "react";
import "./CommentList.scss";
import Footer from "../Footer/Footer";
import axios from "axios";

function CommentList({ id, comments }) {
  function commentDate(comment) {
    let date;

    if (comment.timestamp && !isNaN(comment.timestamp)) {
      date = new Date(comment.timestamp);
    } else if (comment.date) {
      date = new Date(comment.date);
    } else {
      return "Unknown Date";
    }

    return isNaN(date.getTime()) ? "Unknown Date" : date.toLocaleDateString();
  }

  return (
    <>
      <section className="comments">
        <div className="comments__title">
          <h3 className="comments__title-count">{comments.length} Comments</h3>
        </div>
        <div className="comments__section">
          <ul className="comments__section-list">
            {comments.map((comment) => {
              return (
                <li
                  key={comment.id}
                  className="comments__section-list-commentbox"
                >
                  <div className="comments__section-list-commentbox-top">
                    <p className="comments__section-list-commentbox-top-name">
                      {comment.name}
                    </p>
                    <p className="comments__section-list-commentbox-top-date">
                      {commentDate(comment)}
                    </p>
                  </div>
                  <div className="comments__section-list-commentbox-bottom">
                    <p className="comments__section-list-commentbox-bottom-text">
                      {comment.comment}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CommentList;
