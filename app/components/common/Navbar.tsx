import { Home, Menu, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"; // Adjust path based on your shadcn setup
import { cn } from "~/lib/utils";
import { Link } from "react-router";

// Sample categories data
const categories = [
  {
    title: "Electronics",
    href: "/categories/electronics",
    description: "Latest gadgets and devices.",
  },
  {
    title: "Clothing",
    href: "/categories/clothing",
    description: "Fashion for all seasons.",
  },
  {
    title: "Home & Garden",
    href: "/categories/home-garden",
    description: "Essentials for your living space.",
  },
  {
    title: "Books",
    href: "/categories/books",
    description: "Best sellers and classics.",
  },
];

// Custom ListItem component for dropdown items
const ListItem = ({
  className,
  title,
  children,
  to,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-white shadow" : "bg-transparent"
      )}
    >
      <div className="px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-black italic text-blue-400">
                Tradoora
              </h1>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-3 text-sm">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to={"/"}>
                      <NavigationMenuLink
                        className={cn(
                          "rounded-full flex items-center flex-row",
                          isScrolled ? "text-black" : "text-white"
                        )}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to={"/"}>
                      <NavigationMenuLink
                        className={cn(
                          "rounded-full flex items-center flex-row",
                          isScrolled ? "text-black" : "text-white"
                        )}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "flex items-center gap-2 rounded-full bg-transparent ",
                        isScrolled
                          ? "text-black"
                          : "text-white data-[state=open]:bg-transparent"
                      )}
                    >
                      All Category
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {categories.map((category) => (
                          <ListItem
                            key={category.title}
                            title={category.title}
                            to={category.href}
                          >
                            {category.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full flex items-center flex-row",
                  isScrolled ? "text-black" : "text-white"
                )}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant={"ghost"}
              className={cn(
                "rounded-full flex items-center flex-row",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              <User className="h-5 w-5" />
              SignIn
            </Button>
            <Button className="cursor-pointer rounded-full bg-blue-500 text-white hover:bg-blue-600">
              Create Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <Button variant={"ghost"} className="cursor-pointer">
                <User className="h-5 w-5" />
                SignIn
              </Button>
              <Button className="cursor-pointer rounded-full bg-blue-500 text-white hover:bg-blue-600">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
