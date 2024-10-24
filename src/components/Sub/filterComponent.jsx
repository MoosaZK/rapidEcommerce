import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchProductsByCategory, fetchSearchProducts } from "@/store/slice/cartSlice"; // Import the actions

const FilterComponent = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/category-list");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    if (category === "all") {
      dispatch(fetchSearchProducts("")); // Fetch all products when "All" is clicked
    } else {
      dispatch(fetchProductsByCategory(category)); // Fetch products by selected category
    }
    setShowPopup(false); // Close the popup after selecting a category
  };

  return (
    <div className="relative">
      <button
        onClick={togglePopup}
        className="px-10 py-2 font-semibold text-white bg-black"
      >
        Filter
      </button>

      {showPopup && (
        <div className="absolute right-0 z-10 w-48 p-4 mt-2 bg-white border rounded shadow-lg">
          <h3 className="mb-2 font-semibold text-gray-700">Categories</h3>
          <ul className="text-sm text-gray-600">
            <li
              onClick={() => handleCategoryClick("all")}
              className="py-1 cursor-pointer hover:bg-gray-200"
            >
              All
            </li>
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="py-1 capitalize cursor-pointer hover:bg-gray-200"
                >
                  {category}
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
