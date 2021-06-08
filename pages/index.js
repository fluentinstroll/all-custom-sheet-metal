import Head from 'next/head'
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>All Custom Sheet Metal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Carousel>
  <Carousel.Item >
    <img
      className={styles.carouselImage}
      src="/assets/homeCarousel_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className={styles.carouselCaption}>
      <h1>All Custom Sheet Metal</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={styles.carouselImage}
      src="/assets/homeCarousel_2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </main>

      <footer>
        
      </footer>


    </div>
  )
}
