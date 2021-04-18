import React from "react";
import styles from "./SearchUser.module.css";
import { Link } from "react-router-dom";
function SearchUser({ user, length }) {
  return (
    <div className={styles.user}>
      {length === 1 ? (
        <div>No User Found</div>
      ) : (
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      )}
    </div>
  );
}

export default SearchUser;
