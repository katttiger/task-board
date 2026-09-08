import React, { useState, type ChangeEvent } from "react";
import { categories } from "../data/categories";
import { assignees } from "../data/assignees";
import type { Priority } from "../types/Priority";

type SearchBarProps = {
  filters: {
    query: string;
    category: string;
    assignee: string;
    priority: string;
  };
  onFilterChange: (filter: string, filterValue: string) => void;
};
const SearchBar = ({ filters, onFilterChange }: SearchBarProps) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 p-4 bg-orange-50">
      <input
        type="text"
        placeholder="Sök efter uppgift..."
        className="p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
        value={filters.query}
        onChange={(e) => onFilterChange("query", e.target.value)}
      />

      <select
        className="p-3 border-2 border-orange-300 rounded-lg bg-white"
        value={filters.category}
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        <option value="all">Alla Kategorier</option>
        {categories.map((cat) => (
          <option key={cat.key} value={cat.value}>
            {cat.value}
          </option>
        ))}
      </select>

      <select
        className="p-3 border-2 border-orange-300 rounded-lg bg-white"
        value={filters.priority}
        onChange={(e) => onFilterChange("priority", e.target.value)}
      >
        <option value="all">Alla Prioriteter</option>
        <option value="Låg">Låg</option>
        <option value="Medel">Medel</option>
        <option value="Hög">Hög</option>
      </select>

      <select
        className="p-3 border-2 border-orange-300 rounded-lg bg-white"
        value={filters.assignee}
        onChange={(e) => onFilterChange("assignee", e.target.value)}
      >
        <option value="all">Alla Ansvariga</option>
        {assignees.map((person) => (
          <option key={person.key} value={person.value}>
            {person.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
