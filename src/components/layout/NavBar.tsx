
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/e89eca17-8ba6-4bae-b94e-9dd34871c79a.png" 
                alt="USTP Logo" 
                className="h-10 w-10 object-contain" 
              />
              <span className="text-lg font-bold text-ustp-blue">USTP Opportunity System</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/marketplace" className="text-gray-700 hover:text-ustp-blue transition-colors">
              Marketplace
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-ustp-blue transition-colors">
              Jobs
            </Link>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-ustp-blue text-white">US</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">USTP Student</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        student@ustp.edu.ph
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button 
                      className="w-full text-left"
                      onClick={() => setIsAuthenticated(false)}
                    >
                      Log out
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button className="bg-ustp-blue text-white hover:bg-ustp-darkblue">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="border-ustp-blue text-ustp-blue hover:bg-ustp-blue hover:text-white">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
