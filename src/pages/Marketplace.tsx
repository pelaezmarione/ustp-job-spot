
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  seller: string;
  category: string;
  condition: string;
  image: string;
  createdAt: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Calculus Textbook 10th Edition",
    description: "Slightly used textbook for Calculus I. All pages intact, some highlighting.",
    price: 450,
    seller: "John Smith",
    category: "Books",
    condition: "Used - Good",
    image: "https://images.unsplash.com/photo-1588580000645-f43a65d97800?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-03-15"
  },
  {
    id: 2,
    title: "Scientific Calculator FX-991EX",
    description: "Casio scientific calculator. Perfect for engineering students. Includes batteries.",
    price: 850,
    seller: "Maria Garcia",
    category: "Electronics",
    condition: "Used - Like New",
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-04-02"
  },
  {
    id: 3,
    title: "USTP PE Uniform - Size M",
    description: "Official USTP Physical Education uniform. Only used for one semester.",
    price: 300,
    seller: "Alex Johnson",
    category: "Clothing",
    condition: "Used - Good",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-04-10"
  },
  {
    id: 4,
    title: "Programming with Python Textbook",
    description: "Latest edition of Programming with Python. No markings or highlights.",
    price: 500,
    seller: "Emma Wilson",
    category: "Books",
    condition: "Used - Excellent",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-03-28"
  },
  {
    id: 5,
    title: "Drafting Tools Set",
    description: "Complete set of architectural drafting tools. Includes compass, ruler, and protractor.",
    price: 650,
    seller: "David Lee",
    category: "School Supplies",
    condition: "New",
    image: "https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-04-05"
  },
  {
    id: 6,
    title: "USB Flash Drive - 64GB",
    description: "SanDisk 64GB USB drive. Fast transfer speeds, perfect for storing projects.",
    price: 350,
    seller: "Sophia Martinez",
    category: "Electronics",
    condition: "New",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    createdAt: "2023-04-12"
  },
];

const Marketplace = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    // In a real app, this would be an API call
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (category !== 'all') {
      result = result.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'latest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    
    setFilteredProducts(result);
  }, [products, searchTerm, category, sortOption]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-ustp-lightgray">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ustp-blue mb-2">USTP Marketplace</h1>
            <p className="text-gray-600">Buy, sell, or trade items with fellow USTP students</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input
                  placeholder="Search for items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="school supplies">School Supplies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="mb-4 flex justify-end">
            <Button className="bg-ustp-yellow text-black hover:brightness-95">
              + Post Item for Sale
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription className="text-ustp-blue font-semibold">
                      ₱{product.price.toFixed(2)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>{product.category}</span>
                      <span>{product.condition}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <span className="text-xs text-gray-500">Posted by {product.seller}</span>
                    <Button size="sm" className="bg-ustp-blue text-white hover:bg-ustp-darkblue">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <h3 className="text-xl font-semibold text-gray-600">No items found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
