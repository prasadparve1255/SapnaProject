import React, { useState } from "react";

const allProducts = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: "$999" },
  { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: "$899" },
  { id: 3, name: "Dell XPS 13", category: "Laptop", price: "$1199" },
  { id: 4, name: "Sony WH-1000XM5", category: "Headphones", price: "$399" },
  { id: 5, name: "Apple Watch Series 9", category: "Smartwatch", price: "$499" },
  { id: 6, name: "Canon EOS R10", category: "Camera", price: "$979" },
  { id: 7, name: "Amazon Echo Dot", category: "Smart Home", price: "$49" },
  { id: 8, name: 'Samsung 55" QLED TV', category: "Television", price: "$799" },
  { id: 9, name: "iPad Air", category: "Tablet", price: "$599" },
  { id: 10, name: "Bose SoundLink Flex", category: "Speaker", price: "$149" },
  { id: 11, name: "Google Pixel 8", category: "Mobile", price: "$799", quantity: 9 },
  { id: 12, name: "Logitech MX Master 3", category: "Accessories", price: "$99", quantity: 25 },
];

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (wishlist.find((item) => item.id === product.id)) {
      alert("Product already in wishlist!");
      return;
    }
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product List</h2>
      <div style={styles.productsGrid}>
        {allProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <div style={styles.productImagePlaceholder}></div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productCategory}>{product.category}</p>
            <p style={styles.productPrice}>{product.price}</p>
            <button
              onClick={() => addToWishlist(product)}
              style={styles.addButton}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.title, marginTop: 50 }}>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>
          No products in wishlist.
        </p>
      ) : (
        <ul style={styles.wishlist}>
          {wishlist.map((product) => (
            <li key={product.id} style={styles.wishlistItem}>
              <span>{product.name} - {product.price}</span>
              <button
                onClick={() => removeFromWishlist(product.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "900px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    color: "#34495e",
    marginBottom: "25px",
    fontWeight: "700",
    fontSize: "2rem",
    textShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  productCardHover: {
    transform: "scale(1.05)",
  },
  productImagePlaceholder: {
    fontSize: "50px",
    marginBottom: "15px",
  },
  productName: {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "6px",
  },
  productCategory: {
    fontSize: "0.9rem",
    color: "#7f8c8d",
    marginBottom: "10px",
  },
  productPrice: {
    fontWeight: "700",
    color: "#27ae60",
    marginBottom: "12px",
  },
  addButton: {
    backgroundColor: "#2980b9",
    border: "none",
    padding: "10px 18px",
    color: "white",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(41, 128, 185, 0.5)",
    transition: "background-color 0.3s ease",
  },
  wishlist: {
    maxWidth: "600px",
    margin: "auto",
    listStyle: "none",
    padding: 0,
  },
  wishlistItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px",
    marginBottom: "12px",
    borderRadius: "10px",
    backgroundColor: "#ecf0f1",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    border: "none",
    color: "white",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Wishlist;
