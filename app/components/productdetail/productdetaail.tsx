'use client'
import { useState } from "react";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <div>
        <div className="aspect-square w-full rounded-lg overflow-hidden">
          <img
            src="/greenshirt.png"
            alt="Main Product"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex mt-4 space-x-4">
          <img
            src="/greenshirt.png"
            alt="Thumbnail 1"
            className="w-20 h-20 rounded-lg object-cover cursor-pointer border"
          />
          <img
            src="/greenshirt2.png"
            alt="Thumbnail 2"
            className="w-20 h-20 rounded-lg object-cover cursor-pointer border"
          />
          <img
            src="/greenshirt3.png"
            alt="Thumbnail 3"
            className="w-20 h-20 rounded-lg object-cover cursor-pointer border"
          />
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-2xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center space-x-2">
          <div className="text-yellow-500 flex space-x-1">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <p className="text-gray-500 text-sm">(4.5/5)</p>
        </div>
        <div className="mt-4">
          <span className="text-2xl font-bold">$260</span>
          <span className="text-gray-400 line-through ml-2">$300</span>
          <span className="text-red-500 ml-2">-40%</span>
        </div>
        <p className="text-gray-600 mt-4">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable
          fabric, it offers superior comfort and style.
        </p>

        {/* Color Selector */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Select Colors</h3>
          <div className="flex space-x-4">
            {["green", "olive", "navy"].map((color) => (
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

        {/* Size Selector */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Choose Size</h3>
          <div className="flex space-x-4">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
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

        {/* Quantity Selector */}
        <div className="mt-6 flex items-center space-x-4">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="w-10 h-10 border rounded-lg flex items-center justify-center"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="w-10 h-10 border rounded-lg flex items-center justify-center"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 w-full  text-black py-3 rounded-lg border-2 border-gray-200 hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
