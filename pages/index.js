import Head from 'next/head'
import NavBar from '../components/NavBar';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>All Custom Sheet Metal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <div className={styles.bgWrap}>
        <Image
        layout="fill"
        src="/assets/temp/Industrial-1_5-2-hero.jpg"
        alt="temp"
      />
      </div>
      <p className={styles.bgText}>
        All Custom
        <br />
        Sheet Metal
      </p>
      </main>

      <footer>
        
      </footer>


    </div>
  )
}
