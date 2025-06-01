import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MacBook Pro M3",
      price: 25000000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 18000000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 3500000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=100&h=100&fit=crop&crop=center"
    }
  ]);

  const formatPrice = (price: number | bigint) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 25000 : 0;
  const total = subtotal + shipping;

  return (
    <main className="pt-42 pb-20 max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingBag className="w-8 h-8" />
        <h1 className="font-black text-3xl">Shopping Cart</h1>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 sm:py-20 text-center">
          <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6 px-4">Looks like you haven't added anything to your cart yet</p>
          <Button className="w-full sm:w-auto">Continue Shopping</Button>
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
          {/* Cart Items */}
          <Card className="flex-1">
            <CardHeader className="flex-col sm:flex-row flex justify-between items-start sm:items-center gap-2 sm:gap-0">
              <CardTitle className="text-lg sm:text-xl">Items ({cartItems.length})</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAll}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 self-end sm:self-auto"
              >
                <X className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Clear All</span>
                <span className="sm:hidden">Clear</span>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-4 sm:gap-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Avatar className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex-shrink-0">
                      <AvatarImage src={item.image} alt={item.name} />
                      <AvatarFallback className="rounded-xl">{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 min-w-0 flex-1">
                      <CardTitle className="text-base sm:text-lg leading-tight">{item.name}</CardTitle>
                      <CardDescription className="text-sm sm:text-base font-medium">
                        {formatPrice(item.price)}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex-shrink-0"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex-shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {/* Price and Remove */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start space-y-0 sm:space-y-2">
                      <CardTitle className="text-base sm:text-lg">
                        {formatPrice(item.price * item.quantity)}
                      </CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 text-xs h-7"
                      >
                        <X className="w-3 h-3 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-center sm:justify-end pt-4">
              <Button variant="outline" className="w-full sm:w-auto">Continue Shopping</Button>
            </CardFooter>
          </Card>

          {/* Order Summary */}
          <Card className="w-full xl:w-80 h-fit xl:sticky xl:top-6">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              <hr />
              <div className="flex justify-between text-base sm:text-lg font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                *Including taxes and fees
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:space-y-3">
              <Button className="w-full text-sm sm:text-base" size="lg">
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                Save for Later
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </main>
  );
}