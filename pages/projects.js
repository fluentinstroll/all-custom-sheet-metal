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
      </div>
      <div className={styles.projectsContainer}>
        
      <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Project 1</h1>
          <Image src="/assets/pro1.jpg" className={styles.projectImage}/> 
        </div>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Project 2</h1>
          <Image src="/assets/pro2.jpg" className={styles.projectImage}/> 
        </div>
       
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Project 3</h1>
       <Image src="/assets/pro3.jpg" className={styles.projectImage}/>
        </div>
        
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Project 4</h1>
          <Image src="/assets/pro4.jpg" className={styles.projectImage}/>
        </div>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Project 5</h1>
          <Image src="/assets/pro1.jpg" className={styles.projectImage}/>
        </div>
        <div className={styles.projectBox}>
          <h1 className={styles.projectText}>Project 6</h1>
          <Image src="/assets/pro2.jpg" className={styles.projectImage}/>
        </div>
      </div>
      <div className={styles.extra}>

</div>
    </Layout>
  );
}
