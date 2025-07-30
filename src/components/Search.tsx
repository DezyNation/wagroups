"use client";
import React, { useEffect, useState } from "react";
const Search = ({ onSearch }: { onSearch: (query: number) => void }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState("");
  const [isClient, setIsClient] = useState(false);

  const handleSearch = () => {
    onSearch(parseInt(query));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    refreshHistory();
  }, [isClient]);

  function refreshHistory() {
    if (isClient) {
      setHistory(localStorage.getItem("lastGroup") || "");
    }
  }

  if (!isClient) return <></>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        margin: "2rem auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div onClick={refreshHistory}>
        <p>Last Link</p>

        <p style={{ color: "blue" }}>Group {history}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <input
          type="number"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
