"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/product-card";
import Filters from "@/components/filters";

const featuredProducts = [
  {
    id: 1,
    name: "Minimalist Sneakers",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Roupas",
  },
  {
    id: 2,
    name: "Classic Tee",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Roupas",
  },
  {
    id: 3,
    name: "Urban Backpack",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
  },
  {
    id: 6,
    name: "Slim Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eletrônicos",
  },
  {
    id: 8,
    name: "Slim Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Casa",
  },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? featuredProducts
      : featuredProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div>
      <Header />
      <section className="relative bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen p-6">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Find all products and categories here!
              </h1>
              <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find different styles of products and enjoy your shopping
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <div className="mt-4 md:mt-0">
            <Filters onFilterChange={setSelectedCategory} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
