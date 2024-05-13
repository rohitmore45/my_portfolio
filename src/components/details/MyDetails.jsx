import React from "react";
import styles from "./MyDetails.module.css";

export default function MyDetails() {
  return (
    <div className={`${styles.mainContainer}`}>
      <img
        src="./public/myPhoto.jpg"
        alt="my_Photo"
        className={`${styles.myImg}`}
      />

      <div className={`${styles.nameSection}`}>
        <h1 className={`${styles.name}`}>Rohit More</h1>
        <div className={`${styles.frontend}`}>Frontend Developer</div>
        <div className={`${styles.mediaLinks}`}>
          <a href="https://linkedin.com/in/rohit-more-28b170293" target="blank">
            <i
              className="fa-brands fa-linkedin fa-lg"
              style={{ color: "#1060ea" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="fa-brands fa-whatsapp fa-lg"
              style={{ color: "#09b92c" }}
            ></i>
          </a>
          <a href="https://github.com/rohitmore45" target="blank">
            <i
              className="fa-brands fa-github fa-lg"
              style={{ color: " #202f46" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="fa-brands fa-instagram fa-lg"
              style={{ color: "#fc31a7" }}
            ></i>
          </a>
        </div>
      </div>

      <div className={`${styles.details}`}>
        <div className={`${styles.contactDetails}`}>
          <div className={`${styles.icon}`}>
            <i
              className="fa-solid fa-mobile-screen fa-lg"
              style={{ color: "#f73b8c" }}
            ></i>
          </div>
          <div>
            <span>Phone</span>
            <p>+919604653143</p>
          </div>
        </div>
        <div className={`${styles.contactDetails}`}>
          <div className={`${styles.icon}`}>
            <i
              className="fa-solid fa-envelope-open-text fa-lg"
              style={{ color: "#41b9b3" }}
            ></i>
          </div>
          <div>
            <span>Email</span>
            <p>rohitbmore2002@gmail.com</p>
          </div>
        </div>
        <div className={`${styles.contactDetails}`}>
          <div className={`${styles.icon}`}>
            <i
              className="fa-solid fa-location-dot fa-lg"
              style={{ color: "#e12392" }}
            ></i>
          </div>
          <div>
            <span>Location</span>
            <p>Ameerpet, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className={`${styles.downloadBtn}`}>
        <a href=""><i class="fa-solid fa-download fa-lg"></i> Download CV</a>
      </div>
    </div>
  );
}
