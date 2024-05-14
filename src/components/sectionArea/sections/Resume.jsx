import React from "react";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <div className={`${styles.mainContainer}`}>
      <section>
        <h2>Resume</h2>
        <div className={styles.eduContainer}>
          <i
            className="fa-solid fa-graduation-cap fa-xl"
            style={{ color: "#c93182" }}
          ></i>
          <h4>Education</h4>
        </div>
        <div className={styles.boxContainer1}>
          <div className={`${styles.eduBox1}`}>
            <p>Pursuing</p>
            <div>MSc in Information Technology</div>
            <p>Dr.Babasaheb Ambedkar University, Maharashtra</p>
          </div>

          <div className={`${styles.eduBox2}`}>
            <p>2020-2023</p>
            <div>BSc in Computer Science</div>
            <p>Dr.Babasaheb Ambedkar University, Maharashtra</p>
          </div>
        </div>
        <div className={styles.boxContainer1}>
          <div className={`${styles.eduBox3}`}>
            <p>2018-2020</p>
            <div>
              12<sup>th</sup> Class
            </div>
            <p>Higher Secondary School Certificate, Maharashtra</p>
          </div>

          <div className={`${styles.eduBox4}`}>
            <p>2018</p>
            <div>
              10<sup>th</sup> Class
            </div>
            <p>Secondary School Certificate, Maharashtra</p>
          </div>
        </div>
      </section>
      <div className={styles.skillContainer}>
        <div className={styles.skillBox}>
          <p>Technical Skills</p>
          <section className={styles.nameBoxContainer}>
            <div className={styles.nameBox}>
              <div>
                <p>HTML</p>
                <p>80%</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar1}></div>
              </div>
            </div>
            <div className={styles.nameBox}>
              <div>
                <p>CSS</p>
                <p>60%</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar2}></div>
              </div>
            </div>
            <div className={styles.nameBox}>
              <div>
                <p>JavaScript</p>
                <p>60%</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar3}></div>
              </div>
            </div>
            <div className={styles.nameBox}>
              <div>
                <p>React</p>
                <p>70%</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar4}></div>
              </div>
            </div>
            <div className={styles.nameBox}>
              <div>
                <p>Node JS</p>
                <p>50%</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar5}></div>
              </div>
            </div>
            <div className={styles.nameBox}>
              <div>
                <p>Bootstrap</p>
                <p>60%</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar6}></div>
              </div>
            </div>
          </section>
        </div>


        <div className={styles.knowledgeBox}>
          <p>Soft Skills</p>
          <section>
                <div className={styles.softSkillContainer}>
                  <p>Communication</p>
                  <p>Adaptability</p>
                </div>
                <div className={styles.softSkillContainer}>
                  <p>Teamwork</p>
                  <p>Creativity</p>
                </div>
                <div className={styles.softSkillContainer}>
                  <p>Problem-solving</p>
                  <p>Flexibility</p>
                </div>
                <div className={styles.softSkillContainer}>
                  <p>Continuous learning</p>
                </div><div className={styles.softSkillContainer}>
                  <p>Time management</p>
                </div>
          </section>
        </div>
      </div>
    </div>
  );
}
