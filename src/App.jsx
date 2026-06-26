import { Routes, Route } from "react-router-dom";
import { AddProduct } from "./pages/Addproduct";

import Login from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Signup from "./pages/Signup";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
     <Route path="/" element={<Signup />} />
     <Route path="/login" element={<Login />} />
  
 <Route
  path="/home"
  element={
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  }
/>
<Route
  path="/products"
  element={
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  }
/>

<Route
  path="/about"
  element={
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  }
/>

<Route
  path="/contact"
  element={
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  }
/>
  <Route path="/add-product" element={<> <Navbar/> <AddProduct/> <Footer/>  </>}/>
</Routes>
     
    </>
  );
}

export default App;
