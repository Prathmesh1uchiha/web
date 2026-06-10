export function Hero() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.heading}>
          Experience the Future of Technology
        </h1>

        <p style={styles.text}>
          Shop the latest laptops, smartphones, gaming gear, smart watches,
          and premium accessories at NovaTech.
        </p>

        <button style={styles.button}>
          Explore Collection
        </button>
      </div>

      <div style={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900"
          alt="Technology"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "70px 60px",
    background: "linear-gradient(to right, #eff6ff, #ffffff)",
    flexWrap: "wrap",
  },

  left: {
    width: "48%",
    minWidth: "300px",
  },

  heading: {
    fontSize: "52px",
    color: "#0f172a",
    marginBottom: "20px",
  },

  text: {
    fontSize: "18px",
    color: "#475569",
    lineHeight: "30px",
    marginBottom: "25px",
  },

  button: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "14px 30px",
    borderRadius: "10px",
    fontSize: "16px",
  },

  right: {
    width: "45%",
    minWidth: "300px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
};