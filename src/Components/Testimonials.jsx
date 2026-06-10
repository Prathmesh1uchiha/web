export function Testimonials() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>What Our Customers Say</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Customer"
            style={styles.avatar}
          />
          <h3>Rahul Sharma</h3>
          <p style={styles.review}>
            "NovaTech has amazing products and fast delivery. My laptop arrived
            in perfect condition!"
          </p>
          <p style={styles.stars}>⭐⭐⭐⭐⭐</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Customer"
            style={styles.avatar}
          />
          <h3>Priya Patel</h3>
          <p style={styles.review}>
            "Excellent quality and great prices. I loved the wireless
            headphones I ordered."
          </p>
          <p style={styles.stars}>⭐⭐⭐⭐⭐</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://randomuser.me/api/portraits/men/67.jpg"
            alt="Customer"
            style={styles.avatar}
          />
          <h3>Amit Verma</h3>
          <p style={styles.review}>
            "Very smooth shopping experience and friendly support. Highly
            recommended!"
          </p>
          <p style={styles.stars}>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#eef2ff",
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    color: "#0f172a",
    marginBottom: "35px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  card: {
    width: "280px",
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 15px",
  },

  review: {
    color: "#475569",
    lineHeight: "24px",
    marginTop: "10px",
  },

  stars: {
    fontSize: "20px",
    marginTop: "15px",
  },
};