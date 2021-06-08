import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>All Custom Sheet Metal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Carousel>
            <Carousel.Item>
              <img
                className={styles.carouselImage}
                src="/assets/homeCarousel_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption className={styles.carouselCaption}>
                <h1>All Custom Sheet Metal</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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

          <p className={styles.homeInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
        </Layout>
      </main>
    </div>
  );
}
