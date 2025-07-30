"use client";
import { useEffect, useState } from "react";
import { groupsArray } from "@/lib/data";
import Search from "@/components/Search";

export default function Home() {
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
    // @ts-ignore
    if (groupsArray.length) setResults(groupsArray);
  }, [groupsArray]);

  return (
    <div style={{ padding: "1rem" }}>
      <Search onSearch={(q) => handleSearch(q)} />
      <main>
        <div className="grid">
          {results?.map((item, key) => (
            <a href={item} key={key} target="_blank" className="grid-item">
              Group {groupsArray.indexOf(item) + 1}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
