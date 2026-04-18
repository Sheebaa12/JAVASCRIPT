import React, { useEffect, useState } from "react";
import productsData from "./products.json";

export default function ProductSearchApp() {
  // custom debounce hook
  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
  }

  // custom localStorage hook
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  }

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useLocalStorage("lastSearch", "");

  const debouncedSearch = useDebounce(search, 500);

  // Requirement 1: useEffect fetch JSON
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Filter logic
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Clear button
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Product Search Card App</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={clearSearch} style={{ padding: "10px" }}>
        Clear
      </button>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginTop: "20px"
        }}
      >
        {filteredProducts.length === 0 ? (
          <h2>No Results Found</h2>
        ) : (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "200px",
                borderRadius: "8px"
              }}
            >
              <h3>{p.name}</h3>
              <p>{p.category}</p>
              <p>{p.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}