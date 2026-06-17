import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

export function ProductCard() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
  getProducts();
}, []);

     const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (!error) {
    setProducts(data);
  }
};

const deleteProduct = async (id) => {
  await supabase
    .from("products")
    .delete()
    .eq("id", id);

  getProducts();
};
  
  return (

    <div style={styles.container}>
    <h1 style={styles.heading}>Featured Products</h1>

    <Link to="/add-product">
      <button style={styles.button}>
        Add Item
      </button>
    </Link>

    <div style={styles.grid}>
  {products.map((item) => (
    <div key={item.id} style={styles.card}>
      <img
        src={item.image}
        alt={item.name}
        style={styles.image}
      />

      <h3>{item.name}</h3>

      <p style={styles.description}>
        {item.details}
      </p>

      <h2 style={styles.price}>
        ₹{item.price}
      </h2>

      <button style={styles.button}>
        Buy Now
      </button>

      <button
        style={styles.deleteButton}
        onClick={() => deleteProduct(item.id)}
      >
        🗑️ Delete
      </button>
    </div>
  ))}
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

  deleteButton: 
  {
     backgroundColor: "red",
     color: "white",
     border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
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