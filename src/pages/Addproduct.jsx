import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

export function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    image: "",
    name: "",
    details: "",
    price: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    const { error } = await supabase
      .from("products")
      .insert([product]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product Added");
    navigate("/products");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Add Product</h1>

      <input
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="details"
        placeholder="Product Details"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}