import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import Image from "react-bootstrap/Image";

export default function About() {
    return(
        <Layout>
            <div>
                <Image src="/assets/aboutHeader.jpg" className={styles.aboutHeaderImg} />
                <h1 className={styles.aboutHeader}>
                    About
                </h1>
                <p className={styles.aboutInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </Layout>
    )
}

