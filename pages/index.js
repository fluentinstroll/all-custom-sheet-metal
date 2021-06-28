import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
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
                <h2>All Custom Sheet Metal</h2>
                <p>Here for all your custom sheet metal needs</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.carouselImage}
                src="/assets/homeCarousel_2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className={styles.carouselCaption}>
                <h2>Quality you can see</h2>
                <p>Perfectly crafted and fine tuned to your needs</p>
                <Button href="/about" className={styles.frontpageButton}>
                  Learn More
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <h1 className={styles.homeHeader}>For a service you can trust</h1>
          <div className={styles.frontpageTextAlign}>
            <p className={styles.homeInfo}>
              Count on us to bring the capacity and agility for any job, big or
              small. Our expert team is committed to the highest standards and
              when challenges come up, we find solutions. Simple as that.
            </p>
            <Button href="/why-us" className={styles.frontpageButton}>
              Learn More
            </Button>
          </div>
          <h1 className={styles.homeHeader}>Satisfaction guaranteed</h1>

          <div className={styles.projectsSection}>
            <div>
              <p className={styles.projectsInfo}>
                Over the years, we have developed multiple projects for all
                extremely satisfied clients. Take a look at our portfolio of
                work.
              </p>
              <Button href="/projects" className={styles.frontpageButton}>
                Our projects
              </Button>
            </div>
            <Image src="/assets/homePage_1.jpg" className={styles.homeImage} />
          </div>
          <h1 className={styles.homeHeader}>
            Want an opinion? Contact us today
          </h1>
          <div className={styles.contactSection}>
            <div className={styles.contactSectionPictures}>
              <Image
                src="/assets/homeContact_1.jpeg"
                className={styles.contactImage}
              />
              <Image
                src="/assets/homeContact_2.jpg"
                className={styles.contactImage}
              />
              <Image
                src="/assets/homeContact_3.jpg"
                className={styles.contactImage}
              />

              <Image
                src="/assets/homeContact_4.jpeg"
                className={styles.contactImage}
              />
            </div>
            <div className={styles.frontpageTextAlign}>
              <p className={styles.contactInfo}>
                Contact us through email or phone to get started with our
                services.
              </p>
              <Button href="/contact" className={styles.frontpageButton}>
                Contact
              </Button>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}
