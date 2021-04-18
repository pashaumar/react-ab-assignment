import React, { useState, useEffect } from "react";
import styles from "./PostsListView.module.css";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
function PostsListView() {
  const TOTAL_POSTS = 100;
  const POSTS_PER_PAGE = 10;
  const NUMBER_OF_PAGES = TOTAL_POSTS / POSTS_PER_PAGE;
  const [postsData, setPostsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostsData(...postsData, data));
  }, []);
  const showPosts = () => {
    if (postsData.length === 0) {
      return <div>Loading...</div>;
    }
    if (postsData.length > 0) {
      return postsData
        .slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
        .map((post, index) => {
          return (
            <div key={index} className={styles.postWrapper}>
              <p className={styles.titleContent}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </p>
              <p className={styles.userIdContent}>
                <Link to={`/user/${post.userId}`}>{post.userId}</Link>
              </p>
            </div>
          );
        });
    }
  };

  return (
    <div className={styles.posts}>
      <div className={styles.postsContainer}>
        <div className={styles.postWrapper}>
          <p className={styles.titleHead}>Title</p>
          <p className={styles.userIdHead}>User Id</p>
        </div>
        {showPosts()}
      </div>
      <div>
        <Pagination
          numberOfPages={NUMBER_OF_PAGES}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default PostsListView;
