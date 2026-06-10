export function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.subHeading}>
        Have questions or need assistance? We'd love to hear from you.
      </p>

      <div style={styles.wrapper}>
        <div style={styles.infoCard}>
          <h2>Contact Information</h2>

          <p>📍 Address: 123 Tech Street, Mumbai, India</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📧 Email: support@novatech.com</p>
          <p>🕒 Mon - Sat: 9:00 AM - 8:00 PM</p>

          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
            alt="Office"
            style={styles.image}
          />
        </div>

        <div style={styles.formCard}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Subject"
            style={styles.input}
          />

          <textarea
            placeholder="Write your message..."
            rows="6"
            style={styles.textarea}
          ></textarea>

          <button style={styles.button}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    color: "#0f172a",
    marginBottom: "10px",
  },

  subHeading: {
    textAlign: "center",
    color: "#64748b",
    fontSize: "18px",
    marginBottom: "40px",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    flexWrap: "wrap",
  },

  infoCard: {
    flex: 1,
    minWidth: "320px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    lineHeight: "32px",
  },

  formCard: {
    flex: 1,
    minWidth: "320px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
  },

  textarea: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    resize: "none",
  },

  button: {
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    marginTop: "20px",
    borderRadius: "12px",
  },
};