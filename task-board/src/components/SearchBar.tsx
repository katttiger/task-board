import { useState, useEffect } from "react";
import { categories } from "../data/categories";
import type { Assignee } from "../types/assignee";

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
  const [assignees, setAssignees] = useState<Assignee[]>([]);

  useEffect(() => {
    const fetchAssigneesFromDatabase = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/tasks/assignees",
        );
        if (response.ok) {
          const data = await response.json();
          setAssignees(data);
        }
      } catch (error) {
        console.error("Error fetching assignees for search bar: ", error);
      }
    };
    fetchAssigneesFromDatabase();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center gap-4 p-4 bg-orange-50">
      <div>
        <label htmlFor="title"></label>
        <input
          name="title"
          type="text"
          placeholder="Sök efter uppgift..."
          className="p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          value={filters.query}
          onChange={(e) => onFilterChange("query", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category"></label>
        <select
          name="category"
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
      </div>
      <div>
        <label htmlFor="priority"></label>
        <select
          name="priority"
          className="p-3 border-2 border-orange-300 rounded-lg bg-white"
          value={filters.priority}
          onChange={(e) => onFilterChange("priority", e.target.value)}
        >
          <option value="all">Alla Prioriteter</option>
          <option value="Låg">Låg</option>
          <option value="Medel">Medel</option>
          <option value="Hög">Hög</option>
        </select>
      </div>

      <div>
        <label htmlFor="assignee"></label>
        <select
          name="assignee"
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
    </div>
  );
};

export default SearchBar;
