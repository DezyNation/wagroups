"use client";
import { useEffect, useState } from "react";
import { groupsArray } from "@/lib/data";
import Search from "@/components/Search";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (query: number) => {
    // @ts-ignore
    if (!query) setResults(groupsArray);
    const filteredResults = groupsArray.filter((item, index) => {
      if (query - 1 == index) {
        return item;
      }
    });

    if (filteredResults?.length) {
      // @ts-ignore
      setResults(filteredResults);
    }
  };

  useEffect(() => {
    setIsClient(true);
    // @ts-ignore
    if (groupsArray.length) setResults(groupsArray);
  }, [groupsArray]);

  return (
    <div style={{ padding: "1rem" }}>
      <Search onSearch={(q) => handleSearch(q)} />
      <main>
        <div className="grid">
          {results?.map((item, key) => {
            if (isClient)
              return (
                <p
                  key={key}
                  className="grid-item"
                  onClick={() => {
                    // Open link in new tab
                    localStorage.setItem(
                      "lastGroup",
                      `${groupsArray.indexOf(item) + 1}`,
                    );
                    window.open(item, "_blank");
                  }}
                >
                  Group {groupsArray.indexOf(item) + 1}
                </p>
              );
          })}
        </div>
      </main>
    </div>
  );
}
