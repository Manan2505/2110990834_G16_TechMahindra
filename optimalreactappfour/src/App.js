import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const initialProducts = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [minPrice, setMinPrice] = useState(0);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products with price >", minPrice);
    return products.filter((p) => p.price > minPrice);
  }, [products, minPrice]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Manager</h1>
      <label>
        Minimum Price Filter:{" "}
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </label>

      <p>Filtered products: {filteredProducts.length}</p>

      <ProductForm
        onSubmit={editingProduct ? updateProduct : addProduct}
        product={editingProduct}
      />

      <ProductList
        products={filteredProducts}
        onEdit={setEditingProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;
