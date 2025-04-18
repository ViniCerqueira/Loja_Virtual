import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Loja Virtual" }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="hidden xl:inline xl:text-2xl">MINIMAL</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-black/70"
          >
            Inicio
          </Link>
          <Link
            href="/pages/products"
            className="text-sm font-medium transition-colors hover:text-black/70"
          >
            Produtos
          </Link>
          <Link
            href="pages/sobre"
            className="text-sm font-medium transition-colors hover:text-black/70"
          >
            Sobre
          </Link>
        </nav>
        {/* Search Bar */}
        <div className="hidden md:flex relative w-full max-w-sm mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-md border pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Search"
            asChild
          >
            <Link href="/search" className="md:hidden">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Cart"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                3
              </span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <Link href="/account/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
