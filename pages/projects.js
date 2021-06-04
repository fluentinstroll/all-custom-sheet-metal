import Layout from "../components/Layout";
import style from "../styles/Projects.module.css";

export default function Projects() {
    return(
        <Layout>
            <div>
                <h1 className={style.projectsHeader}>
                    Projects
                </h1>
                <p className={style.projectsInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </Layout>
    )
}