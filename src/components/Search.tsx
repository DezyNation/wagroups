"use client";
import React, { useState } from "react";
const Search = ({ onSearch }: { onSearch: (query: number) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(parseInt(query));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        margin: "2rem auto",
      }}
    >
      <div>
        <input
          type="number"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '4px',
            fontSize: '1.2rem',
            color: '#FFF',
            outline: 'none',
            border: 'none',
            borderBottom: '1px solid #FFF',
            marginRight: '1rem',
            backgroundColor: 'transparent'
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
