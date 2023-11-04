import React from "react";

//Styles
import styles from "./NavBar.module.css";

const NavBar = ({ logoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>ShioChatApp</div>
      <div className={styles.logout} onClick={logoutHandler}>
        Log Out
      </div>
    </div>
  );
};

export default NavBar;
