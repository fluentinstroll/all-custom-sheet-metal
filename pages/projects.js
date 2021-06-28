import Layout from "../components/Layout";
import styles from "../styles/Projects.module.css";
import Image from "react-bootstrap/Image";

export default function Projects() {
  return (
    <Layout>
      <Image
        src="/assets/projectsHeader.jpg"
        className={styles.projectsHeaderImg}
      />
      <div>
        <h1 className={styles.projectsHeader}>Projects</h1>
      </div>
      <h3 className={styles.ourProjects}>
        Take a look at some of our previous work
      </h3>
      <hr></hr>
      <div className={styles.projectsContainer}>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Like what you see</h1>
          <Image src="/assets/pro1.jpg" className={styles.projectImage} />
        </div>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Contact us today</h1>
          <Image src="/assets/pro2.jpg" className={styles.projectImage} />
        </div>

        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Let us get it done</h1>
          <Image src="/assets/pro3.jpg" className={styles.projectImage} />
        </div>

        <div className={styles.projectBox}>
          <h1 className={styles.projectText}></h1>
          <Image src="/assets/pro4.jpg" className={styles.projectImage} />
        </div>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}></h1>
          <Image src="/assets/pro5.jpg" className={styles.projectImage} />
        </div>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}></h1>
          <Image src="/assets/pro6.jpg" className={styles.projectImage} />
        </div>
      </div>
      <hr></hr>
      <div className={styles.extra}></div>
    </Layout>
  );
}
