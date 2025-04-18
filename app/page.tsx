import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/product-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Home() {
  // Sample featured products data
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
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-900 to-purple-70000 min-h-screen p-6">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Discover Your Style
                </h1>
                <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Curated collections for the modern lifestyle. Minimalist
                  designs with maximum impact.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/products">Shop Now</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/collections">View Collections</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Featured collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Featured Products
            </h2>
            <Link
              href="/products"
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

        {/* Newsletter */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Join Our Newsletter
            </h2>
            <p className="max-w-md mx-auto text-gray-500 mb-6">
              Stay updated with the latest products, exclusive offers, and style
              tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
