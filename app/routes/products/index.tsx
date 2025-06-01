import { Input } from "~/components/ui/input";
import {
  ArrowRight,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Checkbox } from "~/components/ui/checkbox";
import { Slider } from "~/components/ui/slider";
import { useNavigate } from "react-router";
export default function Products() {

    const navigate = useNavigate();

    const handleDirectDetail = () => {
        navigate("/product/1");
    }

  return (
    <section className="h-screen max-w-7xl mx-auto w-full lg:pt-36">
      <div>
        <h1 className="text-2xl font-black">Products</h1>
        <CardDescription>Browse our wide selection of products</CardDescription>
      </div>
      <div className="flex gap-5 mt-4">
        <aside className="w-[700px] border h-[350px] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <CardTitle>Filters</CardTitle>
            <Button size={"sm"} variant={"ghost"}>
              <X />
              Clear All{" "}
            </Button>
          </div>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <Checkbox id="new" /> <label htmlFor="new">New</label>
                  </li>
                  <li className="flex items-center gap-2">
                    <Checkbox id="electronic" />{" "}
                    <label htmlFor="electronic">Electronics</label>
                  </li>
                  <li className="flex items-center gap-2">
                    <Checkbox id="fashion" />{" "}
                    <label htmlFor="fashion">Fashion</label>
                  </li>
                  <li className="flex items-center gap-2">
                    <Checkbox id="best-seller" />{" "}
                    <label htmlFor="best-seller">Best Seller</label>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Price Range</AccordionTrigger>
              <AccordionContent>
               <div className="mt-4">
                    <Slider defaultValue={[100]} max={100} step={2} />
                    <div className="flex mt-2 items-center justify-between">
                        <CardDescription>Rp 100.000</CardDescription>
                        <CardDescription>Rp 100.000.000</CardDescription>
                    </div>
               </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="relative max-w-sm w-full">
              <Input type="search" className="pr-8" placeholder="Search.." />
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="text-sm font-medium">Sort by:</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="low-to-high">Price: Low To High</SelectItem>
                  <SelectItem value="high-to-low">Price: High To Low</SelectItem>
                  <SelectItem value="new-arrival">New Arrivals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-5">

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
                <CardDescription onClick={handleDirectDetail} className="text-sm cursor-pointer hover:underline">
                  Wireless Bluetooth Headphones
                </CardDescription>
                <CardTitle className="text-base md:text-lg">
                  Rp 250.000
                </CardTitle>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Star className="text-green-400 fill-green-400 w-4 h-4" />
                  <span className="text-xs md:text-sm font-medium">4.9</span>-
                  <span className="text-xs md:text-sm">100+ stock ready</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
