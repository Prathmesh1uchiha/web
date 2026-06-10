export function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About NovaTech</h1>

      <p style={styles.description}>
        NovaTech is a modern electronics and technology store committed to
        providing premium gadgets at affordable prices. Our mission is to make
        the latest technology accessible to everyone with quality products and
        trusted customer service.
      </p>

      <div style={styles.stats}>
        <div style={styles.box}>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div style={styles.box}>
          <h2>500+</h2>
          <p>Products Available</p>
        </div>

        <div style={styles.box}>
          <h2>100+</h2>
          <p>Trusted Brands</p>
        </div>

        <div style={styles.box}>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900"
            alt="About NovaTech"
            style={styles.image}
          />
        </div>

        <div style={styles.right}>
          <h2>Why Choose Us?</h2>

          <ul style={styles.list}>
            <li>✔️ High-quality technology products</li>
            <li>✔️ Competitive pricing</li>
            <li>✔️ Fast and secure delivery</li>
            <li>✔️ Excellent customer support</li>
            <li>✔️ Trusted by thousands of customers</li>
          </ul>
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
    marginBottom: "20px",
  },

  description: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    color: "#475569",
    fontSize: "18px",
    lineHeight: "30px",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "50px",
    marginBottom: "60px",
  },

  box: {
    width: "200px",
    padding: "25px",
    backgroundColor: "white",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    minWidth: "300px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },

  list: {
    marginTop: "20px",
    lineHeight: "35px",
    fontSize: "18px",
    color: "#334155",
  },
};