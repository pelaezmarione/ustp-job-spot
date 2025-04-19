import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import MarketplaceFilters from '@/components/marketplace/MarketplaceFilters';
import ProductsGrid from '@/components/marketplace/ProductsGrid';
import { Product } from '@/types/marketplace';

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
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    if (category !== 'all') {
      result = result.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
    
    if (searchTerm) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
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
      <main className="flex-grow bg-gradient-to-br from-white to-ustp-gray">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-ustp-darkblue mb-2">USTP Marketplace</h1>
            <p className="text-gray-600 text-lg">Buy, sell, or trade items with fellow USTP students</p>
          </div>
          
          <MarketplaceFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            category={category}
            setCategory={setCategory}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          
          <div className="mb-4 flex justify-end">
            <Button 
              className="bg-ustp-yellow text-black hover:brightness-95 transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              + Post Item for Sale
            </Button>
          </div>
          
          <ProductsGrid products={filteredProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
