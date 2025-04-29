"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border bg-white shadow-md hover:shadow-lg transition-all"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-all"
            />
          </motion.div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="absolute bottom-4 right-4 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <Button size="sm" className="rounded-full " aria-label="Add to cart">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Buy
        </Button>
      </div>
    </motion.div>
  );
}
