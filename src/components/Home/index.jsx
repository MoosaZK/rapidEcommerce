import React, { useState, useCallback } from "react";
import ProductList from "../Sub/productList";
import { debounce } from "lodash";
import FilterComponent from "../Sub/filterComponent";
function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((query) => setSearchQuery(query), 500),
    []
  );

  const handleSearch = (e) => {
    e.preventDefault();
    debouncedSearch(e.target.value);
  };

  return (
    <>
      <div className="container py-10 mx-auto mt-16 md:mt-24">
        <div className="flex items-center gap-5 px-2 mb-6 md:px-0">
          <input
            type="text"
            placeholder="Search products..."
            onInput={handleSearch}
            className="w-full p-2 border rounded"
          />
          <FilterComponent /> 
        </div>
        <ProductList searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default HomeComponent;
