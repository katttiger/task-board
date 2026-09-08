import { useState } from "react";
import type { Task } from "../types/Task";
import { categories } from "../data/categories";

const SearchBar = () => {
  return (
    <div className="bg-yellow-100 p-3 flex">
      <section>
        <form>
          <label htmlFor="title" className="bg-orange-100">
            Uppgift
          </label>
          <input
            type="text"
            placeholder="Title"
            className="border-black border-1 bg-white rounded"
          ></input>

          <div className="p-3">
            <label htmlFor="priority" className="bg-orange-100">
              Prioritet
            </label>
            <select
              id="priority"
              className="border-black border-1 bg-white rounded"
            >
              <option>Låg</option>
              <option>Medel</option>
              <option>Hög</option>
            </select>
          </div>

          <div className="p-3">
            <label htmlFor="category" className="bg-orange-100">
              Kategori
            </label>
            <select
              id="category"
              className="border-black border-1 bg-white rounded"
            >
              {categories.map((category) => (
                <option key={category.key} value={category.value}>
                  {category.value}
                </option>
              ))}
            </select>
          </div>

          <div className="p-3">
            <label htmlFor="assignee" className="bg-orange-100">
              Ansvarig
            </label>
            <select
              id="assignee"
              className="border-black border-1 bg-white rounded"
            >
              {assignees.map((person) => (
                <option key={person.key} value={person.value}>
                  {person.value}
                </option>
              ))}
            </select>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SearchBar;
