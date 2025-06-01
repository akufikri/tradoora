import { useState } from "react";
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
  CardDescription,
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
import { trpc } from "~/lib/trpc";

export default function Products() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: products, isLoading, error } = trpc.product.list.useQuery({
    searchTerm,
  });

  const handleDirectDetail = (slug: string) => {
    navigate(`/product/${slug}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto w-full px-4 py-8 lg:pt-36 pt-24">
      <div className="mb-6">
        <h1 className="text-2xl font-black">Products</h1>
        <CardDescription>Browse our wide selection of products</CardDescription>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-80 h-[400px] border rounded-xl p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-lg">Filters</CardTitle>
            <Button size="sm" variant="ghost">
              <X className="w-4 h-4 mr-1" />
              Clear All
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
        {/* Main Content */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Input
                type="search"
                className="pr-8"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="text-sm font-medium">Sort by:</span>
              <Select>
                <SelectTrigger className="w-44">
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
          {isLoading ? (
            <div className="text-center text-gray-500">Loading products...</div>
          ) : error ? (
            <div className="text-center text-red-500">Error: {error.message}</div>
          ) : products?.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-700">
                No products found
              </h2>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters to find products.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative group">
                    <img
                      className="object-cover w-full h-48"
                      src={product.imageUrl ?? "https://via.placeholder.com/300"}
                      alt={product.name ?? "Product"}
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
                  <div className="p-4 space-y-2">
                    <CardDescription
                      onClick={() => handleDirectDetail(product.slug)}
                      className="text-sm cursor-pointer hover:underline truncate"
                    >
                      {product.name}
                    </CardDescription>
                    <CardTitle className="text-base md:text-lg">
                      Rp {Number(product.price).toLocaleString('id-ID')}
                    </CardTitle>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Star className="text-green-400 fill-green-400 w-4 h-4" />
                      <span className="text-xs md:text-sm font-medium">4.9</span>-
                      <span className="text-xs md:text-sm">
                        {product.stockQuantity} stock ready
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}