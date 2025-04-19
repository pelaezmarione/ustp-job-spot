
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const [featuredMarketplaceItems] = useState([
    {
      id: 1,
      title: "Calculus Textbook 10th Edition",
      price: 450,
      image: "https://images.unsplash.com/photo-1588580000645-f43a65d97800?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Scientific Calculator FX-991EX",
      price: 850,
      image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Programming with Python Textbook",
      price: 500,
      image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ]);
  
  const [featuredJobs] = useState([
    {
      id: 1,
      title: "Web Developer Intern",
      company: "TechSolutions Inc.",
      type: "Internship",
      location: "Cagayan de Oro"
    },
    {
      id: 2,
      title: "Marketing Assistant",
      company: "Global Marketing PH",
      type: "Part-time",
      location: "Remote"
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "USTP Research Department",
      type: "On-campus",
      location: "USTP Campus"
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ustp-blue to-ustp-darkblue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  USTP Student Opportunity System
                </h1>
                <p className="text-xl text-gray-200">
                  Connect with marketplace opportunities and job listings tailored for USTP students.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/marketplace">
                    <Button className="bg-ustp-yellow text-black hover:brightness-95 font-semibold px-6 py-2">
                      Explore Marketplace
                    </Button>
                  </Link>
                  <Link to="/jobs">
                    <Button className="bg-white text-ustp-blue hover:bg-gray-100 font-semibold px-6 py-2">
                      Browse Jobs
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="USTP Opportunity System" 
                  className="rounded-lg shadow-xl max-h-96 object-cover w-full" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-ustp-blue mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-ustp-lightgray p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-ustp-yellow rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Student Marketplace</h3>
                <p className="text-gray-600">
                  Buy, sell, or trade items with fellow USTP students. From textbooks to tech gadgets, find what you need at student-friendly prices.
                </p>
              </div>
              
              <div className="bg-ustp-lightgray p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-ustp-blue text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Job Portal</h3>
                <p className="text-gray-600">
                  Discover part-time jobs, internships, and freelance opportunities both on and off campus that fit your schedule and career goals.
                </p>
              </div>
              
              <div className="bg-ustp-lightgray p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-ustp-yellow rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
                <p className="text-gray-600">
                  Authenticate with your USTP credentials for a secure experience. Connect with verified members of the USTP community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-16 bg-ustp-lightgray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-ustp-blue">Featured Marketplace Items</h2>
              <Link to="/marketplace">
                <Button variant="outline" className="mt-4 md:mt-0 border-ustp-blue text-ustp-blue hover:bg-ustp-blue hover:text-white">
                  View All Items
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredMarketplaceItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-ustp-blue font-medium">₱{item.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-ustp-blue">Featured Job Opportunities</h2>
              <Link to="/jobs">
                <Button variant="outline" className="mt-4 md:mt-0 border-ustp-blue text-ustp-blue hover:bg-ustp-blue hover:text-white">
                  View All Jobs
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <div className="flex justify-between mt-3 text-sm">
                      <span className="text-gray-500">{job.location}</span>
                      <span className="text-ustp-blue font-medium">{job.type}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-ustp-blue text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the USTP Student Opportunity System today and connect with the resources you need for success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button className="bg-ustp-yellow text-black hover:brightness-95 font-semibold px-8 py-3 text-lg">
                  Create an Account
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-white text-ustp-blue hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
