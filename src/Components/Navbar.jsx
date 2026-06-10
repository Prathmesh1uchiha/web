export function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>NovaTech</h2>

      <div style={styles.menu}>
        <span style={styles.item}>Home</span>
        <span style={styles.item}>Products</span>
        <span style={styles.item}>About</span>
        <span style={styles.item}>Contact</span>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: "0",
  },

  logo: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    gap: "25px",
  },

  item: {
    fontSize: "17px",
    fontWeight: "bold",
    cursor: "default",
  },
};