import React, { useState, useEffect } from "react";
import styles from "./UserView.module.css";
import { useParams, Link } from "react-router-dom";
function UserView() {
  const params = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  console.log(userData);
  const showUserData = () => {
    if (userData === null) {
      return <div>Loading...</div>;
    }
    if (userData !== null) {
      return (
        <div className={styles.userData}>
          <p>
            <span>User Name: </span>
            {userData.username}
          </p>
          <p>
            <span>Full Name: </span>
            {userData.name}
          </p>
          <p>
            <span>Email: </span>
            {userData.email}
          </p>
          <p>
            <span>Website: </span>
            {userData.website}
          </p>
          <div className={styles.companyDetails}>
            <span>Company Details:</span>
            <div>
              <p>{userData.company.name}</p>
              <p>{userData.company.bs}</p>
              <p>{userData.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={styles.userDataContainer}>
      <div className={styles.goBack}>
        <Link to="/">Go Back</Link>
      </div>
      {showUserData()}
    </div>
  );
}

export default UserView;
