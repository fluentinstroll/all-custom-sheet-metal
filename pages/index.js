import Head from 'next/head'
import NavBar from '../components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>All Custom Sheet Metal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Image
        layout="fill"
        src="/assets/temp/Industrial-1_5-2-hero.jpg"
        alt="temp"
      />
      </main>

      <footer>
        
      </footer>


    </div>
  )
}
