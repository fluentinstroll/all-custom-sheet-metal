import styles from '../styles/Footer.module.css';
var { SocialIcon } = require('react-social-icons');
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <div className="Footer" className={styles.footerStyle}>
    <p>Address land Contact Info</p>
    <p>Company Name and Logo</p>
    <Row>
      <Col className={styles.footerCol}>
        <SocialIcon url="#" network="linkedin" bgColor="black" />
      </Col>
      <Col className={styles.footerCol}>
        <SocialIcon url="#" network="instagram" bgColor="black" />
      </Col>
      <Col className={styles.footerCol}>
        <SocialIcon url="#" network="facebook" bgColor="black" />
      </Col>
    </Row>
  </div>
);

export default Footer;
