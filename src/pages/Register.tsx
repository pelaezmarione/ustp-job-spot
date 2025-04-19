
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: '',
    userType: 'student'
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleUserTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Check if email is a USTP email for students
    if (formData.userType === 'student' && !formData.email.endsWith('@ustp.edu.ph')) {
      toast.error('Please use your USTP email address');
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Registration successful!');
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center py-8"
         style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)' }}>
      <Card className="w-full max-w-md bg-white/95 animate-fade-in">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <img 
            src="/lovable-uploads/e89eca17-8ba6-4bae-b94e-9dd34871c79a.png" 
            alt="USTP Logo" 
            className="h-16 w-16 object-contain mb-4" 
          />
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Enter your details to register for the USTP Opportunity System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="ustp-input"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="ustp-input"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="ustp-input"
                required
              />
              {formData.userType === 'student' && (
                <p className="text-xs text-gray-500">Use your USTP email (example@ustp.edu.ph)</p>
              )}
            </div>
            <div className="space-y-2">
              <Select value={formData.userType} onValueChange={handleUserTypeChange}>
                <SelectTrigger className="ustp-input">
                  <SelectValue placeholder="Select User Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="employer">Employer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.userType === 'student' && (
              <div className="space-y-2">
                <Input
                  id="studentId"
                  type="text"
                  placeholder="Student ID"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="ustp-input"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="ustp-input"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="ustp-input"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-ustp-yellow text-black hover:brightness-95"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Register'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center w-full text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-ustp-blue hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
