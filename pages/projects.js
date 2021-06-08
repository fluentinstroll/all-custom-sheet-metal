import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';
import Image from 'react-bootstrap/Image';

export default function Projects() {
  return (
    <Layout>
      <Image
        src="/assets/projectsHeader.jpg"
        className={styles.projectsHeaderImg}
      />
      <div>
        <h1 className={styles.projectsHeader}>Projects</h1>
        <p className={styles.projectsInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectBox}>
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
            culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>
        </div>
        <div className={styles.projectBox}>
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
            culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>
        </div>

        <div className={styles.projectBox}>
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
            culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>
        </div>
        <div className={styles.projectBox}>
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
            culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>
        </div>
        <div className={styles.projectBox}>
          <h3>Project 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
            culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>
        </div>
        <div className={styles.projectBox}>
          <h3>Project 6</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
            culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>
        </div>
      </div>
    </Layout>
  );
}
