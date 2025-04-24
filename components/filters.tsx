import React, { useState } from "react";

interface FilterProps {
  onFilterChange?: (category: string) => void;
}

const Filters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Todos", "Eletrônicos", "Roupas", "Acessórios", "Casa"];

  const handleFilterChange = (category: string) => {
    if (typeof onFilterChange === "function") {
      onFilterChange(category);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
      >
        <span>Categorias</span>
        <div className="flex flex-col space-y-1">
          <span
            className={`block w-4 h-0.5 bg-gray-700 transition-transform duration-200 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-4 h-0.5 bg-gray-700 transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-4 h-0.5 bg-gray-700 transition-transform duration-200 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 transform z-50 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {categories.map((category) => (
            <button
              key={category}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
