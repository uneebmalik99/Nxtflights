import { lazy, useState } from "react";
import styles from "../Contact/Contact.module.css";
import axios from "axios";
import { Spin, notification } from "antd";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Contact = () => {
  const contactForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(contactForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Start loading
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/send-contact-email`,
        formData
      );
      // Stop loading
      setLoading(false);

      // Show the notification on success
      notification.success({
        message: "Success",
        description: "Email sent successfully.",
      });

      // Clear the form data on success
      setFormData(contactForm);
    } catch (error) {
      // Stop loading
      setLoading(false);
      console.error("Error sending contact email:", error);
      notification.error({
        message: "Error",
        description: "Failed to send email.",
      });
    }
  };

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
                <br />
                <a href="mailto:contact@example.com">contact@example.com</a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.phone}>
                <i className="fas fa-phone"></i>
              </div>
              <p>
                <strong>Phone</strong>
                <a href="tel:(123) 456-7890">
                  <br /> (123) 456-7890
                </a>
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
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.lastFormRow}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.lastFormRow}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? <Spin /> : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
