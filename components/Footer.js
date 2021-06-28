import styles from "../styles/Footer.module.css";
var { SocialIcon } = require("react-social-icons");
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <div
    className={styles.footerStyle}
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 590,
    }}
  >
    <div>
      <h6>Proudly Serving the GTA </h6>
    </div>
    <div>
      <h6>All Custom Sheet Metal</h6>
    </div>
    <div>
      {" "}
      <SocialIcon
        url="https://www.linkedin.com/"
        network="linkedin"
        bgColor="black"
      />
      <SocialIcon
        url="https://www.instagram.com/?hl=en"
        network="instagram"
        bgColor="black"
      />
      <SocialIcon
        url="https://www.facebook.com/"
        network="facebook"
        bgColor="black"
      />{" "}
    </div>
  </div>
);

export default Footer;
/*
   <Col className={styles.footerCol}></Col>

   <Col className={styles.footerCol}></Col>

   
      <Col className={styles.footerCol}>
    
      </Col>
   
  </div>
  */
