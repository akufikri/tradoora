import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function BestSeller() {
  return (
    <section className="w-full h-auto mt-20 px-4 md:px-6 lg:px-0 max-w-6xl mx-auto">
      <div className="my-3 flex flex-col sm:flex-row items-start sm:items-center justify-between mt-20 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black">Best Sellers</h1>
          <span className="text-gray-500 text-sm md:text-base">
            Our most popular products based on sales
          </span>
        </div>
        <Button variant={"link"}>
          View All <ArrowRight />
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
        {/* Product cards remain the same, just adjust the image height for smaller screens */}
        <div className="rounded overflow-hidden">
          <div className="relative group">
            <img
              className="object-cover w-full h-48 sm:h-full"
              src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-0 bg-white hover:bg-gray-100"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <CardDescription className="text-sm">Wireless Bluetooth Headphones</CardDescription>
            <CardTitle className="text-base md:text-lg">Rp 250.000</CardTitle>
            <div className="flex items-center gap-1.5 text-gray-400">
              <Star className="text-green-400 fill-green-400 w-4 h-4" />
              <span className="text-xs md:text-sm font-medium">4.9</span>-
              <span className="text-xs md:text-sm">100+ stock ready</span>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden">
          <div className="relative group">
            <img
              className="object-cover w-full h-48 sm:h-full"
              src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-0 bg-white hover:bg-gray-100"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <CardDescription className="text-sm">Wireless Bluetooth Headphones</CardDescription>
            <CardTitle className="text-base md:text-lg">Rp 250.000</CardTitle>
            <div className="flex items-center gap-1.5 text-gray-400">
              <Star className="text-green-400 fill-green-400 w-4 h-4" />
              <span className="text-xs md:text-sm font-medium">4.9</span>-
              <span className="text-xs md:text-sm">100+ stock ready</span>
            </div>
          </div>
        </div>
        {/* Repeat the same changes for other product cards */}
      </div>
    </section>
  );
}
