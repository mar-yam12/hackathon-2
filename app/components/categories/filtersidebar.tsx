'use client'
import { useState } from "react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("Large");

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const colors = ["red", "green", "orange", "yellow", "blue", "pink", "black", "purple"];
  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div className="w-full max-w-sm bg-white border rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filters</h2>
        <button className="text-gray-500 hover:text-gray-700">✖</button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} className="text-gray-700 cursor-pointer hover:underline">
              {category} &gt;
            </li>
          ))}
        </ul>
      </div>

      {/* Price Slider */}
      <div className="mb-6">
        <h3 className="font-medium mb-4">Price</h3>
        <input
          type="range"
          min={50}
          max={200}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min={50}
          max={200}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Colors</h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border ${
                selectedColor === color ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border ${
                selectedSize === size ? "bg-black text-white" : "border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Styles */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Dress Style</h3>
        <ul className="space-y-2">
          {dressStyles.map((style) => (
            <li key={style} className="text-gray-700 cursor-pointer hover:underline">
              {style} &gt;
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-black text-white py-3 rounded-lg">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
