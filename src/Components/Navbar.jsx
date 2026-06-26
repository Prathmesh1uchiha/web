import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
 const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error.message);
        return;
    }

    navigate("/");
};
  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>NovaTech</h2>

      <div style={styles.menu}>
<Link to="/home" style={styles.item}>Home</Link>

  <Link to="/products" style={styles.item}>Products</Link>

  <Link to="/about" style={styles.item}>About</Link>

  <Link to="/contact" style={styles.item}>Contact</Link>

  <button
    onClick={signOut}
    style={{
        backgroundColor: "#ef4444",
        color: "white",
        border: "none",
        padding: "8px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold"
    }}
>
    Sign Out
</button>
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
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
},
};