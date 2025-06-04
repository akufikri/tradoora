import type { ProductType } from '~/types/product'; 
import { CardDescription, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: ProductType;
  onNavigate: (slug: string) => void;
}

export function ProductCard({ product, onNavigate }: ProductCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative group">
        <img
          className="object-cover w-full h-48"
          src={product.imageUrl ?? 'https://via.placeholder.com/300'}
          alt={product.name ?? 'Product image'}
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full border-0 bg-white hover:bg-gray-100"
            title="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <CardDescription
          onClick={() => onNavigate(product.slug)}
          className="text-sm cursor-pointer hover:underline truncate"
          title={product.name ?? undefined}
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
            {product.stockQuantity} stok tersedia
          </span>
        </div>
      </div>
    </div>
  );
}