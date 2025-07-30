"use client";
import React, { useEffect, useState } from "react";
const Search = ({ onSearch }: { onSearch: (query: number) => void }) => {
  const [query, setQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  const handleSearch = () => {
    onSearch(parseInt(query));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      }}
    >
      <div
        style={{ width: "max-content", position: "fixed", bottom: 0, left: 0 }}
      >
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
