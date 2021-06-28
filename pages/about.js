import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function About() {
  return (
    <Layout>
      <div>
        <Image
          src="/assets/aboutHeader.jpg"
          className={styles.aboutHeaderImg}
        />
        <h1 className={styles.aboutHeader}>About</h1>
        <div className={styles.aboutContainer}>
          {/*}
        <h3 style={{padding: "15px"}}>What we do</h3>
        <p className={styles.aboutInfo}>
          All Custom Sheet Metal, it is in the name for a reason. We are here
          for you when it comes to any sheet metal work you can turn to us for
          great results.
        </p>
  */}
          <h3 className={styles.ourServices}>Our Services</h3>
          <hr></hr>
          <div className={styles.aboutInfo}>
            <Container fluid>
              <Row className={styles.row1}>
                <Image src="/assets/about1.jpg" className={styles.aboutImage} />
                <Col>
                  <h3>Design and implent</h3>
                  <p>
                    Our team can assist when it comes to creating a design and
                    figuring out the needs for your project. All projects are
                    different our team specializes in realized the projects
                    needs and adjusting accordingly.
                  </p>
                </Col>
              </Row>
              <Row className={styles.row2}>
                <Image src="/assets/about2.jpg" className={styles.aboutImage} />
                <Col>
                  <h3>Creating your needs</h3>
                  <p>
                    We understand what it takes to create quality. Our team
                    wants to satisfy your needs and making sure quality and
                    durability are up to your standards.
                  </p>
                </Col>
              </Row>
              <Row className={styles.row3}>
                <Image src="/assets/about3.jpg" className={styles.aboutImage} />
                <Col>
                  <h3>Experience</h3>
                  <p>
                    With several years of experience we know how to deal with
                    any potential concern. No fuse for you let us handle the
                    issues
                  </p>
                </Col>
              </Row>
              <Row className={styles.row4}>
                <Image src="/assets/about4.jpg" className={styles.aboutImage} />
                <Col>
                  <h3>Accommodation</h3>
                  <p>
                    We have worked with over hundreds of different designs. Got
                    a new project in mind contact us and lets get it sorted.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className={styles.extra}></div>
    </Layout>
  );
}
