import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Filters from "@/components/filters";
import ProductCard from "@/components/product-card";
import { Search, ShoppingCart, User } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const featuredProducts: Product[] = [
  { id: 1, name: "Product 1", price: 99.99, image: "/placeholder.jpg" },
  { id: 2, name: "Product 2", price: 149.99, image: "/placeholder.jpg" },
  { id: 3, name: "Product 3", price: 199.99, image: "/placeholder.jpg" },
];

const ProductsPage: React.FC = () => {
  const handleFilterChange = (category: string) => {
    console.log("Filter changed:", category);
    // Implement filter logic later
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64">
            <Filters onFilterChange={handleFilterChange} />
          </div>

          {/* Products Grid */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-6">Nossos Produtos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
