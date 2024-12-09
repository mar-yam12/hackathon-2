// components/ProductGrid.tsx


import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";


interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/category/1.png",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/category/2.png",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    rating: 5,
    image: "/category/3.png",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    image: "/category/4.png",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "/category/5.png",
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    image: "/category/6.png",
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 150,
    rating: 4.0,
    image: "/category/7.png",
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 120,
    rating: 4.0,
    image: "/category/8.png",
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 130,
    rating: 4.2,
    image: "/category/9.png",
  },
];

export default function ProductGrid() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl font-bold mb-4">Casual</h1>
      <div className="flex justify-between items-center mb-4">
        <p>Showing 1–10 of 100 Products</p>
        <div className="flex items-center space-x-2">
          <p>Sort by:</p>
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border rounded-lg overflow-hidden">
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-60 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <div className="flex items-center space-x-2 text-sm">
                <p className="font-medium text-gray-800">${product.price}</p>
                {product.oldPrice && (
                  <p className="line-through text-gray-500">${product.oldPrice}</p>
                )}
              </div>
              <p className="text-yellow-500">⭐ {product.rating}/5</p>
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
              Free Delivery Available
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
