export function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.logo}>NovaTech</h2>
          <p style={styles.text}>
            NovaTech is your one-stop destination for premium electronics,
            gadgets, and gaming accessories at great prices.
          </p>
        </div>

        <div style={styles.section}>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div style={styles.section}>
          <h3>Customer Care</h3>
          <p>Email: support@novatech.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Mon - Sat | 9:00 AM - 8:00 PM</p>
        </div>

        <div style={styles.section}>
          <h3>Follow Us</h3>
          <p>📘 Facebook</p>
          <p>📷 Instagram</p>
          <p>🐦 X (Twitter)</p>
          <p>▶️ YouTube</p>
        </div>
      </div>

      <hr style={styles.line} />

      <p style={styles.copy}>
        © 2026 NovaTech. All Rights Reserved.
      </p>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "50px 30px 20px",
    marginTop: "50px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },

  section: {
    width: "220px",
  },

  logo: {
    marginBottom: "10px",
    fontSize: "28px",
  },

  text: {
    color: "#cbd5e1",
    lineHeight: "24px",
  },

  line: {
    marginTop: "30px",
    border: "1px solid #334155",
  },

  copy: {
    textAlign: "center",
    marginTop: "20px",
    color: "#94a3b8",
    fontSize: "15px",
  },
};