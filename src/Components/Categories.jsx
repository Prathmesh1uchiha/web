export function Categories() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Browse Categories</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
            alt="Laptops"
            style={styles.image}
          />
          <h3 style={styles.title}>Laptops</h3>
          <p style={styles.text}>Powerful machines for work and gaming.</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
            alt="Smartphones"
            style={styles.image}
          />
          <h3 style={styles.title}>Smartphones</h3>
          <p style={styles.text}>Latest flagship and budget devices.</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
            alt="Audio"
            style={styles.image}
          />
          <h3 style={styles.title}>Audio</h3>
          <p style={styles.text}>Wireless headphones and speakers.</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
            alt="Gaming"
            style={styles.image}
          />
          <h3 style={styles.title}>Gaming</h3>
          <p style={styles.text}>Consoles, accessories and gaming gear.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#f8fafc",
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
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    width: "260px",
    backgroundColor: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  title: {
    marginTop: "15px",
    color: "#1e293b",
  },

  text: {
    padding: "0 15px 20px",
    color: "#64748b",
    fontSize: "15px",
  },
};