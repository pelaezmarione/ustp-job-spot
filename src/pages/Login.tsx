
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      if (studentId && password) {
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        toast.error('Please fill in all required fields');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)' }}>
      <Card className="w-full max-w-md bg-white/95 animate-fade-in">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <img 
            src="/lovable-uploads/e89eca17-8ba6-4bae-b94e-9dd34871c79a.png" 
            alt="USTP Logo" 
            className="h-16 w-16 object-contain mb-4" 
          />
          <CardTitle className="text-2xl font-bold text-center">Login to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your USTP credentials to access the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="studentId"
                type="text"
                placeholder="2023300787"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="ustp-input"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ustp-input"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-ustp-yellow text-black hover:brightness-95"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link to="/forgot-password" className="text-ustp-blue hover:underline">
              I forgot my password. Click here to reset.
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center w-full">
            <Link to="/register">
              <Button variant="outline" className="w-full mt-2 border-ustp-blue text-ustp-blue hover:bg-ustp-blue hover:text-white">
                Register New Account
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
