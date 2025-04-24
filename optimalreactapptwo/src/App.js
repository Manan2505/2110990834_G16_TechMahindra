// App.jsx
import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";

const sampleProducts = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 },
];

function App() {
  const [count, setCount] = useState(0);
  const [products] = useState(sampleProducts);

  // Expensive filter operation memoized
  const expensiveProductsCount = useMemo(() => {
    console.log("Filtering expensive products...");
    return products.filter(p => p.price > 700).length;
  }, [products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>
      <p>Expensive Products Count: {expensiveProductsCount}</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
