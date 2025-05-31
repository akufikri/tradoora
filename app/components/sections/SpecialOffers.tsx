import { ShoppingCart, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export function SpecialOffers() {
  return (
    <section className="max-w-6xl mx-auto w-full mt-20 px-4 sm:px-6">
      <Card className="bg-amber-500 h-auto p-0 rounded-2xl border-0">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="space-y-5 max-w-2xl p-6 md:px-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Special Offers</h1>
              <p className="font-medium text-white">
                Discover amazing deals on selected products. Limitied time
                offer, so act fast!
              </p>
              <div>
                <Button size={"lg"} variant="outline" className="font-bold">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="w-full md:w-80 h-48 md:h-64 bg-black md:rounded-tr-2xl md:rounded-br-2xl rounded-b-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/6214155/pexels-photo-6214155.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto gap-4 md:gap-5">
        {/* Product cards remain the same, just repeated in a responsive grid */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="rounded overflow-hidden">
            <div className="relative group">
              <img
                className="object-cover w-full h-full"
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
              <CardDescription>Wireless Bluetooth Headphones</CardDescription>
              <CardTitle>Rp 250.000</CardTitle>
              <div className="flex items-center gap-1.5 text-gray-400">
                <Star className="text-green-400 fill-green-400 w-4 h-4" />
                <span className="text-sm font-medium ">4.9</span>-
                <span className="text-sm">100+ stock ready</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button className="bg-amber-600 hover:bg-amber-700" size={'lg'}>View All Special Offers</Button>
      </div>
    </section>
  );
}
