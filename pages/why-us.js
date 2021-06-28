import Layout from "../components/Layout";
import styles from "../styles/Why-Us.module.css";
import Image from "react-bootstrap/Image";

export default function Projects() {
  return (
    <Layout>
      <Image src="/assets/whyUsHeader.jpg" className={styles.whyUsHeaderImg} />
      <div>
        <h1 className={styles.whyUsHeader}>Why Us</h1>
        <p className={styles.whyUsInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h2></h2>
      </div>
      <div className={styles.extra}></div>
    </Layout>
  );
}
