import Head from 'next/head'
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>All Custom Sheet Metal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <div>Hello, testing Navbar</div>
      </main>

      <footer>
        
      </footer>


    </div>
  )
}
