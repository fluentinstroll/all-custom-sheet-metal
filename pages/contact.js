import Layout from "../components/Layout";
import style from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <div>
      <h1 className={style.contactHeader}>Contact</h1>
      <p className={style.contactInfo}>
      Have a project in mind?
      Contact us today 
        </p>
        </div>
    </Layout>
  );
}
