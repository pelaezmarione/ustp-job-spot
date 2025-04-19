
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/marketplace';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg text-ustp-darkblue">{product.title}</CardTitle>
        <CardDescription className="text-ustp-blue font-semibold">
          ₱{product.price.toFixed(2)}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span className="bg-ustp-gray/50 px-2 py-1 rounded-full">{product.category}</span>
          <span className="bg-ustp-gray/50 px-2 py-1 rounded-full">{product.condition}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xs text-gray-500">Posted by {product.seller}</span>
        <Button 
          size="sm" 
          className="bg-ustp-blue text-white hover:bg-ustp-darkblue transition-colors duration-300"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
