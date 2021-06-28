import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <Layout>
      <Container fluid>
        <div className={styles.extra}></div>
        <Row className={styles.row1}>
          <Col className={styles.col1}>
            <h3>Area of Service</h3>
            <p>We offer our services accros the GTA. Reach out to us today</p>
          </Col>

          <Col className={styles.col2}>
            <h3>Contact Information</h3>
            <p>Email: sales@allcustomsheetmetal.com</p>
            <p>Phone: 289 231 9178</p>
          </Col>

          <Col className={styles.col3}>
            <h3>Send us an Email</h3>
            <p>Fill out the form below to send us an email</p>
            <p>
              Enter your email, name and a brief description of the inquiry or
              question. We will get back to you as soon as possible.
            </p>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      <div className={styles.contactHeader}>
        <Form>
          <Form.Group className={styles.inputGroupName}>
            <label htmlFor="name">Name</label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              className={styles.inputField}
            />
          </Form.Group>
          <Form.Group className={styles.inputGroupEmail}>
            <label htmlFor="email">Email</label>
            <Form.Control
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              className={styles.inputField}
            />
          </Form.Group>
          <Form.Group className={styles.inputGroupMessage}>
            <label htmlFor="message">Message</label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              className={styles.inputField}
            />
          </Form.Group>
          <Button
            className={styles.contactButton}
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className={styles.extra2}></div>
    </Layout>
  );
}
