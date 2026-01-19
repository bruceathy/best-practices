import { useState } from "react";

export default function SearchList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleSearch} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
