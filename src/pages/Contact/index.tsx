import { lazy } from "react";
import styles from "../Contact/Contact.module.css";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <div className={styles.contactContainer}>
        <h1 className={styles.pageName}>Contact Us</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.contactDetails}>
          <p id={styles.get_in_touch}>Get In Touch</p>
          <p id={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis.
          </p>
          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <div className={styles.address}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p>
                <strong>Address</strong>
                <br /> 123 Main St, City, Country
              </p>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.email}>
                <i className="fas fa-envelope"></i>
              </div>
              <p>
                <strong>Email Us</strong>
                <br /> contact@example.com
              </p>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.phone}>
                <i className="fas fa-phone"></i>
              </div>
              <p>
                <strong>Phone</strong>
                <br /> (123) 456-7890
              </p>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            <div className={styles.socialLinks}>
              <p>Follow Us On</p>
              <a href="https://instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://facebook.com">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactFormWrapper}>
          <div className={styles.send_msg_div}>
            <p id={styles.send_msg}>Send Us a Message</p>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className={styles.formRow}>
              <input type="tel" placeholder="Phone" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className={styles.lastFormRow}>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className={styles.lastFormRow}>
              <textarea placeholder="Message" rows={4} required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
