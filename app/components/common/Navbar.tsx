import { Link } from "react-router";
import { AlignJustify, Flame, Search, ShoppingCart, User } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input"; 

export function Navbar() {
  return (
    <header className="w-full bg-white fixed z-50 lg:px-20 md:px-10 px-5 lg:h-32 h-20 pt-5 shadow">
      {/* Top bar */}
      <div className="lg:flex md:flex hidden items-center justify-between w-full mb-5">
        <div className="flex items-center gap-4">
          <span className="text-xs">
            Customer Service: <strong>+1 (800) 123-4567</strong>
          </span>
          <span className="text-xs">
            Free Shipping on Orders Over{" "}
            <strong className="text-lime-600">$100</strong>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/"} className="hover:underline text-xs">
            Help
          </Link>
          <Link to={"/"} className="hover:underline text-xs">
            Track Order
          </Link>
        </div>
      </div>

      <Separator className="lg:block md:block hidden" />

      {/* Main navbar */}
      <div className="flex items-center justify-between w-full mt-3">
        {/* Logo */}
        <div>
          <Link to={"/"} className="font-black italic text-2xl text-lime-600">
            Tradoora
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="lg:flex md:flex hidden items-center text-sm gap-4">
          <li>
            <Link
              className="font-medium text-gray-500 hover:text-accent-foreground"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-500 hover:text-accent-foreground"
              to={"/"}
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-500 hover:text-accent-foreground"
              to={"/"}
            >
              Fashion
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-gray-500 hover:text-accent-foreground"
              to={"/"}
            >
              Flash Sell
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Search with Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={"ghost"}
                className="hover:cursor-pointer"
                size={"icon"}
              >
                <Search />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full lg:max-w-4xl md:max-w-3xl mx-auto rounded-b-3xl">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl text-lime-600 font-black italic">
                  Search Your Fav Product
                </SheetTitle>
              </SheetHeader>

              <div className="px-5 pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Iphone 15 Pro Max"
                    className="w-full pl-9 placeholder:text-sm text-sm"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-sm capitalize font-bold flex items-center gap-1">
                    <Flame className="w-5 h-5 text-red-500"/> <span className="mt-0.5">Popular : </span>
                  </div>
                  <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-2 gap-2">
                    <Button variant={'outline'}>Iphone 14</Button>
                    <Button variant={'outline'}>Samsung s24</Button>
                    <Button variant={'outline'}>Macbook Pro M2</Button>
                    <Button variant={'outline'}>Iphone 14</Button>
                    <Button variant={'outline'}>Samsung s24</Button>
                    <Button variant={'outline'}>Macbook Pro M2</Button>
                    <Button variant={'default'}>Other</Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* User Icon */}
          <Button
            variant={"ghost"}
            className="hover:cursor-pointer"
            size={"icon"}
          >
            <User />
          </Button>

          {/* Shopping Cart Icon - Only for desktop */}
          <Button
            variant={"ghost"}
            className="hover:cursor-pointer lg:flex md:flex hidden"
            size={"icon"}
          >
            <ShoppingCart />
          </Button>

          {/* Mobile Menu with Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={"ghost"}
                className="hover:cursor-pointer lg:hidden md:hidden flex"
                size={"icon"}
              >
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <SheetHeader>
                <SheetTitle className="text-lime-600 text-2xl font-black italic">
                  Tradoora
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-1 flex flex-col items-center gap-4 text-sm font-medium px-5">
                <Link to={"/"} className="text-gray-700 hover:text-primary">
                  Home
                </Link>
                <Link to={"/"} className="text-gray-700 hover:text-primary">
                  Electronics
                </Link>
                <Link to={"/"} className="text-gray-700 hover:text-primary">
                  Fashion
                </Link>
                <Link to={"/"} className="text-gray-700 hover:text-primary">
                  Flash Sell
                </Link>
              </nav>

              <Separator className="my-2" />

              <div className="grid gap-2 px-5">
                <Button variant="outline">SignIn</Button>
                <Button>SignUp</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
