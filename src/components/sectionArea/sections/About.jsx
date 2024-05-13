import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={`${styles.mainContainer}`}>
      <section>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis
          vitae quidem saepe quia, quam ipsum rem adipisci nobis nesciunt qui
          veritatis doloribus expedita nam sint commodi ut voluptatem non? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laborum
          officiis tempore porro esse eaque laudantium numquam possimus temporib
          edita nam sint commodi ut voluptatem non? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Deserunt laborum officiis tempore porro
          esse eaque laudantiumedita nam sint commodi ut voluptatem non? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laborum
          officiis tempore porro esse eaque laudantium
        </p>

        <h4>What I Do!</h4>

        <div className={`${styles.boxContainer}`}>
          <div className={`${styles.aboutBox1}`}>
            <div>
              <i
                className="fa-solid fa-code fa-xl"
                style={{ color: "#74C0FC" }}
              ></i>
            </div>
            <div>
              <h5>Frontend Devlopment</h5>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                reprehenderit a iste nobis voluptatibus dolore nostrum non
                liber!
              </div>
            </div>
          </div>
          <div className={`${styles.aboutBox2}`}>
            <div>
              <i
                className="fa-solid fa-laptop-code fa-xl"
                style={{ color: "#f52e8e" }}
              ></i>
            </div>
            <div>
              <h5>Backend Devlopment</h5>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                reprehenderit a iste nobis voluptatibus dolore nostrum non
                liber!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
