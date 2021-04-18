import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import SearchUser from "../searchUser/SearchUser";
function Navbar() {
  const [userData, setUserData] = useState([]);
  const [input, setInput] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  useEffect(() => {
    if (userData.length > 0) {
      setSearchUser(
        userData.filter((user) =>
          user.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  }, [input]);
  return (
    <div className={styles.navbar}>
      <p>Assignment</p>

      <div className={styles.input}>
        <input
          type="search"
          name="search"
          placeholder="search user by name"
          onChange={(e) => setInput(e.target.value)}
        />
        {input.length > 0 && (
          <div className={styles.searchUser}>
            {searchUser.map((user, index) => (
              <SearchUser user={user} key={index} length={searchUser.length} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
