import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={`${styles.menuContainer}`}>
      <div className={`${styles.menuItem}`}>
        <span>
          <i className="fa-solid fa-user-large fa-xl"></i>
        </span>
        <p>About</p>
      </div>
      <div className={`${styles.menuItem}`}>
        <span>
          <i className="fa-solid fa-file fa-xl"></i>
        </span>
        <p>Resume</p>
      </div>
      <div className={`${styles.menuItem}`}>
        <span>
          <i className="fa-solid fa-user-graduate fa-xl"></i>
        </span>
        <p>Education</p>
      </div>
      <div className={`${styles.menuItem}`}>
        <span>
          <i className="fa-solid fa-briefcase fa-xl"></i>
        </span>
        <p>Project</p>
      </div>
      <div className={`${styles.menuItem}`}>
        <span>
          <i className="fa-solid fa-address-book fa-xl"></i>
        </span>
        <p>Contact</p>
      </div>
    </div>
  );
}
