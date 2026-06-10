export function ProductCard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Featured Products</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=700"
            alt="Laptop"
            style={styles.image}
          />
          <h3>Ultra Gaming Laptop</h3>
          <p style={styles.description}>
            High performance laptop with powerful graphics.
          </p>
          <h2 style={styles.price}>₹74,999</h2>
          <button style={styles.button}>Buy Now</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
            alt="Phone"
            style={styles.image}
          />
          <h3>Flagship Smartphone</h3>
          <p style={styles.description}>
            Premium camera, AMOLED display and fast processor.
          </p>
          <h2 style={styles.price}>₹49,999</h2>
          <button style={styles.button}>Buy Now</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
            alt="Headphones"
            style={styles.image}
          />
          <h3>Wireless Headphones</h3>
          <p style={styles.description}>
            Crystal clear sound with active noise cancellation.
          </p>
          <h2 style={styles.price}>₹5,999</h2>
          <button style={styles.button}>Buy Now</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700"
            alt="Gaming"
            style={styles.image}
          />
          <h3>Gaming Console</h3>
          <p style={styles.description}>
            Enjoy immersive gaming with next-gen performance.
          </p>
          <h2 style={styles.price}>₹54,999</h2>
          <button style={styles.button}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 40px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    marginBottom: "35px",
    color: "#0f172a",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    width: "260px",
    backgroundColor: "#f8fafc",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    paddingBottom: "20px",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  description: {
    padding: "0 15px",
    color: "#64748b",
    fontSize: "15px",
    minHeight: "50px",
  },

  price: {
    color: "#2563eb",
    margin: "15px 0",
  },

  button: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
};