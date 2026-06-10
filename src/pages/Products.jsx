export function Products() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>
      <p style={styles.subHeading}>
        Explore our latest collection of premium technology products.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=700"
            alt="Laptop"
            style={styles.image}
          />
          <h3>Gaming Laptop</h3>
          <p>Intel Core i7 • 16GB RAM • RTX Graphics</p>
          <h2 style={styles.price}>₹74,999</h2>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
            alt="Smartphone"
            style={styles.image}
          />
          <h3>Premium Smartphone</h3>
          <p>120Hz Display • 5G • 256GB Storage</p>
          <h2 style={styles.price}>₹49,999</h2>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
            alt="Headphones"
            style={styles.image}
          />
          <h3>Wireless Headphones</h3>
          <p>Noise Cancellation • 40Hr Battery</p>
          <h2 style={styles.price}>₹5,999</h2>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700"
            alt="Gaming"
            style={styles.image}
          />
          <h3>Gaming Setup</h3>
          <p>RGB Accessories • High Performance</p>
          <h2 style={styles.price}>₹59,999</h2>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Smart Watch"
            style={styles.image}
          />
          <h3>Smart Watch</h3>
          <p>Fitness Tracking • AMOLED Display</p>
          <h2 style={styles.price}>₹9,999</h2>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1580894908361-967195033215?w=700"
            alt="Keyboard"
            style={styles.image}
          />
          <h3>Mechanical Keyboard</h3>
          <p>RGB Lighting • Blue Switches</p>
          <h2 style={styles.price}>₹3,499</h2>
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
    marginBottom: "40px",
    fontSize: "18px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    width: "270px",
    backgroundColor: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    paddingBottom: "20px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  price: {
    color: "#2563eb",
    marginTop: "12px",
  },
};