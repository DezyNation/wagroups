"use client";
import React, { useEffect, useState } from "react";
const Search = ({ onSearch }: { onSearch: (query: number) => void }) => {
  const [query, setQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  const handleSearch = () => {
    onSearch(parseInt(query));
  };
  
  useEffect(() =>{
    setIsClient(true);
  },[])

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
        <p>Last Link</p>
        {localStorage.getItem("lastGroup") && isClient ? (
          <p
            style={{ color: "blue" }}
            // @ts-ignore
            onClick={() => setQuery(localStorage.getItem("lastGroup"))}
          >
            Group {localStorage.getItem("lastGroup")}
          </p>
        ) : null}
      </div>
      <div>
        <input
          type="number"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "4px",
            fontSize: "1.2rem",
            color: "#FFF",
            outline: "none",
            border: "none",
            borderBottom: "1px solid #FFF",
            marginRight: "1rem",
            backgroundColor: "transparent",
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
