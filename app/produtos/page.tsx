import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "Minimalist Sneakers",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Classic Tee",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Urban Backpack",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Slim Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 8,
    name: "Slim Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
  },
];

export default function Page() {
  return (
    <div>
      <Header />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Featured Products
          </h2>
          <Link
            href="/pages/products/index.tsx"
            className="text-sm font-medium hover:underline mt-2 md:mt-0"
          >
            View all products →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
