import React, { useState, useEffect } from "react";
import styles from "./PostView.module.css";
import { useParams, Link } from "react-router-dom";
function PostView() {
  const params = useParams();
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCommentData(data));
  }, []);

  const showPostData = () => {
    if (postData !== null) {
      return (
        <div className={styles.postData}>
          <div className={styles.postDataWrapper}>
            <p>Title</p>
            <p>User Id</p>
          </div>
          <div className={styles.postDataWrapper}>
            <p>{postData.title}</p>
            <p>{postData.userId}</p>
          </div>
        </div>
      );
    }
  };
  const showCommentData = () => {
    if (commentData !== null) {
      return (
        <div className={styles.commentData}>
          <div className={styles.commentDataWrapper}>
            <p>Subject</p>
            <p>Comment Body</p>
            <p>Contact</p>
          </div>
          <div className={styles.commentDataWrapper}>
            <p>{commentData.name}</p>
            <p>{commentData.body}</p>
            <p>{commentData.email}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={styles.postViewContainer}>
      <div>
        <Link to="/">Go Back</Link>
      </div>
      <div className={styles.data}>
        {showPostData()}
        {showCommentData()}
      </div>
    </div>
  );
}

export default PostView;
