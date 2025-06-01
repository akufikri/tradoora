import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useState } from "react";
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";

export default function DetailProduct() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  return (
    <main className="max-w-7xl w-full mx-auto pt-42 pb-20">
      <div className="flex gap-10">
        <Card className="max-w-lg w-full h-96">
          <CardContent></CardContent>
        </Card>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Lorem product 1</h2>
          <h1 className="text-2xl font-bold">Rp 99.999</h1>
          <CardDescription className="max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            provident ea nisi impedit molestias culpa quasi dicta fugit, amet
            asperiores expedita rerum optio placeat illo?
          </CardDescription>
          <Separator className="my-4" />
          <CardTitle>Quantity</CardTitle>
          <div className="flex mt-3 items-center border rounded-md overflow-hidden w-fit p-1">
            <Button
              variant="ghost"
              size="icon"
              className="hover:cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Input
              className="w-16 h-5 text-center font-bold shadow-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              defaultValue={1}
            />
            <Button
              variant="ghost"
              size="icon"
              className="hover:cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Button className="bg-amber-600 hover:bg-amber-500">
              <ShoppingCart /> Add To Chart
            </Button>
            <Button variant={"outline"}>
              <Heart /> Wishlist
            </Button>
            <Button variant={"outline"}>
              <Share2 />
            </Button>
          </div>
        </div>
      </div>
      {/* review */}
      <div className="mt-7">
        <Tabs defaultValue="description" className="w-[900px]">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="spesification">Spesification</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <p className="text-base leading-relaxed text-gray-700 max-w-prose mt-4">
              The iPhone 14 Pro Max represents Apple's most advanced smartphone
              to date, featuring the powerful A16 Bionic chip and an innovative
              48MP camera system. With its stunning 6.7-inch Super Retina XDR
              display and Dynamic Island, it offers an unparalleled user
              experience. The device comes with advanced safety features
              including Emergency SOS via satellite and Crash Detection. Its
              premium design with Ceramic Shield front and surgical-grade
              stainless steel frame exemplifies luxury and durability. Available
              with up to 1TB storage, it's perfect for professionals and power
              users who demand the best in mobile technology.
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
                  <TableCell className="font-medium">Display</TableCell>
                  <TableCell>6.7-inch Super Retina XDR display</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Processor</TableCell>
                  <TableCell>A16 Bionic chip</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Storage</TableCell>
                  <TableCell>128GB / 256GB / 512GB / 1TB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Camera</TableCell>
                  <TableCell>
                    48MP Main + 12MP Ultra Wide + 12MP Telephoto
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Battery</TableCell>
                  <TableCell>Up to 29 hours video playback</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Operating System
                  </TableCell>
                  <TableCell>iOS 16</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="review">
            <div className="flex gap-3">
              <Card className="w-72 h-80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-green-500 fill-green-500" />
                    <span>5.5</span>
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
                          <div className="flex gap-1"></div>
                          <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                          <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                          <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                          <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
                          <Star className="w-5 h-5 text-gray-300 hover:text-green-500 hover:fill-green-500 cursor-pointer" />
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
                        <Button variant="outline" onClick={() => setShowReviewForm(false)}>Cancel</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

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
                <Card>
                  <CardContent className="py-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                          RJ
                        </div>
                        <div>
                          <h4 className="font-semibold">Robert Johnson</h4>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500 fill-green-500" />
                            <Star className="w-4 h-4 text-green-500" />
                            <Star className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        2 weeks ago
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Good product but there's room for improvement. Battery
                      life could be better.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                          EW
                        </div>
                        <div>
                          <h4 className="font-semibold">Emma Wilson</h4>
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
                        3 weeks ago
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Amazing features and design. Worth every penny! The camera
                      quality is outstanding.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* related content */}
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
        </div>
      </div>
    </main>
  );
}
