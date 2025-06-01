// fe-tradoora/src/routes/products/$slug.tsx
import { useState } from "react";
import { useParams } from "react-router";
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Progress } from "~/components/ui/progress";
import { Separator } from "~/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { trpc } from "~/lib/trpc";
import { Skeleton } from "~/components/ui/skeleton";

export default function DetailProduct() {
  const { slug } = useParams<{ slug: string }>();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [counterQty, setCounterQty] = useState(1);

  // Fetch product details
  const {
    data: product,
    isLoading,
    error,
  } = trpc.product.getBySlug.useQuery({ slug: slug! }, { enabled: !!slug });

  const handleIncrement = () => {
    setCounterQty((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounterQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading) {
    return (
      <main className="max-w-7xl w-full mx-auto py-20 px-4 md:px-3 lg:px-0 lg:pt-42 pt-20 pb-20">
        <div className="flex gap-10">
          <Skeleton className="w-[350px] h-[350px]"/>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-[200px] h-9"/>
            <Skeleton className="w-[300px] h-9"/>
            <Skeleton className="w-[350px] h-8"/>
            <div className="mt-4 flex flex-col gap-3">
              <Skeleton className="w-[150px] h-8"/>
              <Skeleton className="w-[190px] h-12"/>
              <div className="flex flex-row gap-3">
                <Skeleton className="w-[109px] h-12"/>
                <Skeleton className="w-[109px] h-12"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    if (error.data?.code === "NOT_FOUND") {
      return (
        <main className="max-w-7xl w-full mx-auto py-20 px-4 md:px-3 lg:px-0">
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700">
              Product not found
            </h2>
            <p className="text-gray-500 mt-2">
              The product you’re looking for doesn’t exist or has been removed.
            </p>
          </div>
        </main>
      );
    }
    return (
      <main className="max-w-7xl w-full mx-auto py-20 px-4 md:px-3 lg:px-0">
        <div className="text-center text-red-500">Error: {error.message}</div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl w-full mx-auto lg:pt-42 pt-20 pb-20 lg:px-0 md:px-3 px-4">
      <div className="flex gap-10 lg:flex-row flex-col">
        <Card className="w-[350px] h-[350px] overflow-hidden cursor-zoom-in">
          <CardContent className="overflow-hidden">
            <img
              src={product?.imageUrl ?? "https://via.placeholder.com/400"}
              alt={product?.name ?? "Product"}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </CardContent>
        </Card>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">{product?.name}</h2>
          <h1 className="text-2xl font-bold">
            Rp {Number(product?.price).toLocaleString("id-ID")}
          </h1>
          <CardDescription className="max-w-2xl">
            {product?.description}
          </CardDescription>
          <Separator className="my-4" />
          <CardTitle>Quantity</CardTitle>
          <div className="flex mt-3 items-center border rounded-md overflow-hidden lg:w-fit md:w-fit p-1 w-full justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="hover:cursor-pointer"
              onClick={handleDecrement}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Input
              className="w-16 h-5 text-center font-bold shadow-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={counterQty}
              readOnly
            />
            <Button
              variant="ghost"
              size="icon"
              className="hover:cursor-pointer"
              onClick={handleIncrement}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:flex-row md:flex-row flex-col">
            <Button className="bg-amber-600 hover:bg-amber-500 lg:w-auto md:w-auto w-full">
              <ShoppingCart /> Add To Cart
            </Button>
            <Button variant="outline" className="lg:w-auto md:w-auto w-full">
              <Heart /> Wishlist
            </Button>
            <Button variant="outline" className="lg:w-auto md:w-auto w-full">
              <span className="lg:hidden md:hidden block">Share</span>
              <Share2 />
            </Button>
          </div>
        </div>
      </div>
      {/* Description and Tabs */}
      <div className="mt-7">
        <Tabs defaultValue="description" className="lg:w-[1200px] md:w-[700px]">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="spesification">Specification</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <p className="text-sm md:text-base leading-7 text-gray-700 max-w-prose mt-4 w-full lg:w-auto">
              {product?.description}
            </p>
          </TabsContent>
          <TabsContent value="spesification">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Specification</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Stock</TableCell>
                  <TableCell>{product?.stockQuantity} units</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Minimum Order</TableCell>
                  <TableCell>{product?.minimumOrderQuantity} unit(s)</TableCell>
                </TableRow>
                {/* Add more dynamic specs if available in product data */}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="review">
            <div className="flex gap-3 lg:flex-row md:flex-row flex-col">
              <Card className="lg:w-72 w-full h-80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-green-500 fill-green-500" />
                    <span>4.9</span>
                  </CardTitle>
                  <CardDescription>Based on 328 reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 flex items-center gap-1">
                        <Star className="w-4 h-4 text-green-500 fill-green-500" />
                        <span className="text-sm">5</span>
                      </div>
                      <Progress
                        value={75}
                        className="h-2 [&>div]:bg-amber-600"
                      />
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 flex items-center gap-1">
                        <Star className="w-4 h-4 text-green-500 fill-green-500" />
                        <span className="text-sm">4</span>
                      </div>
                      <Progress
                        value={15}
                        className="h-2 [&>div]:bg-amber-600"
                      />
                      <span className="text-sm text-muted-foreground">15%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 flex items-center gap-1">
                        <Star className="w-4 h-4 text-green-500 fill-green-500" />
                        <span className="text-sm">3</span>
                      </div>
                      <Progress
                        value={5}
                        className="h-2 [&>div]:bg-amber-600"
                      />
                      <span className="text-sm text-muted-foreground">5%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 flex items-center gap-1">
                        <Star className="w-4 h-4 text-green-500 fill-green-500" />
                        <span className="text-sm">2</span>
                      </div>
                      <Progress
                        value={3}
                        className="h-2 [&>div]:bg-amber-600"
                      />
                      <span className="text-sm text-muted-foreground">3%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 flex items-center gap-1">
                        <Star className="w-4 h-4 text-green-500 fill-green-500" />
                        <span className="text-sm">1</span>
                      </div>
                      <Progress
                        value={2}
                        className="h-2 [&>div]:bg-amber-600"
                      />
                      <span className="text-sm text-muted-foreground">2%</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setShowReviewForm(true)}
                    className="w-full bg-amber-600 hover:bg-amber-500"
                  >
                    Write Review
                  </Button>
                </CardFooter>
              </Card>
              <div className="flex flex-col w-full gap-2">
                {showReviewForm && (
                  <Card>
                    <CardContent className="py-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Your Rating:</span>
                          <div className="flex gap-1">
                            <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                            <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                            <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                            <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                            <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                      <Textarea
                        placeholder="Share your thoughts about this product..."
                        className="min-h-[100px] mt-3"
                      />
                      <div className="flex gap-2 mt-3">
                        <Button className="bg-amber-600 hover:bg-amber-500">
                          Submit Review
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowReviewForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
                {/* Static reviews (to be replaced with dynamic data later) */}
                <Card>
                  <CardContent className="py-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                          JD
                        </div>
                        <div>
                          <h4 className="font-semibold">John Doe</h4>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        2 days ago
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Great product! The quality is exceptional and it exceeded
                      my expectations. Highly recommended!
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                          AS
                        </div>
                        <div>
                          <h4 className="font-semibold">Alice Smith</h4>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        1 week ago
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Very satisfied with the purchase. Fast delivery and
                      excellent customer service.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Related Products (Static for now, can be made dynamic later) */}
      <Separator className="my-10" />
      <div>
        <h1 className="text-2xl font-bold">Related Products</h1>
        <CardDescription>You might also like these products</CardDescription>
        <div className="grid grid-cols-2 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          <div className="rounded overflow-hidden">
            <div className="relative group">
              <img
                className="object-cover w-full h-48 sm:h-full"
                src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Wireless Bluetooth Headphones"
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
              <CardDescription className="text-sm cursor-pointer hover:underline">
                Wireless Bluetooth Headphones
              </CardDescription>
              <CardTitle className="text-base md:text-lg">Rp 250.000</CardTitle>
              <div className="flex items-center gap-1.5 text-gray-400">
                <Star className="text-green-400 fill-green-400 w-4 h-4" />
                <span className="text-xs md:text-sm font-medium">4.9</span>-
                <span className="text-xs md:text-sm">100+ stock ready</span>
              </div>
            </div>
          </div>
          {/* Add more static related products as needed */}
        </div>
      </div>
    </main>
  );
}
