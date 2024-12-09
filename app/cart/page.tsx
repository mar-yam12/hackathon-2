import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Section - Cart Items */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <div className="space-y-6">
            {/* Cart Item */}
            {[
              {
                name: "Gradient Graphic T-shirt",
                price: 145,
                size: "Large",
                color: "White",
                img: "/cart/1.png",
              },
              {
                name: "Checkered Shirt",
                price: 180,
                size: "Medium",
                color: "Red",
                img: "/cart/2.png",
              },
              {
                name: "Skinny Fit Jeans",
                price: 240,
                size: "Large",
                color: "Blue",
                img: "/cart/3.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Size: {item.size} • Color: {item.color}
                    </p>
                    <p className="font-bold text-md mt-1">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-200 p-2 rounded-full text-sm font-bold">
                    -
                  </button>
                  <span>1</span>
                  <button className="bg-gray-200 p-2 rounded-full text-sm font-bold">
                    +
                  </button>
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">$565</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%)</span>
              <span className="text-red-500 font-bold">-$113</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-bold">$15</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$467</span>
            </div>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
