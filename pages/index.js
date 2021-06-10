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
                  Here for all your custom sheet metal needs
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
                <h1>Quality you can see</h1>
                <p>Perfectly crafted and fine tuned to your needs</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <p className={styles.homeInfo}>
          <h1><strong>For a service you can trust</strong></h1>
<h4>Count on us to bring the capacity and agility for any job, big or small,
   Our expert team is committed to the highest service standards. And when challenges come up, we find solutions, no exceptions.</h4></p>
        </Layout>
      </main>
    </div>
  );
}
