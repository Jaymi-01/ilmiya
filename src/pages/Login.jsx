// src/pages/Login.jsx
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { saveUserToLocalStorage } = useAuth();
  
  const onSubmit = (data) => {
    const allUsers = JSON.parse(localStorage.getItem('ilmiyaUserDB') || '[]');
    
    // Issue 3 Fix: Find user by email AND check password against the mock DB
    const userFound = allUsers.find(
        u => u.email === data.email && u.password === data.password
    );

    if (userFound) {
      // Save the found user as the active user
      saveUserToLocalStorage({...userFound, isLoggedIn: true});
      toast.success(`Login successful! Welcome back, ${userFound.name}.`); 
      navigate('/dashboard');
    } else {
      // Login failed if user not found or password incorrect
      toast.error("Login failed. Incorrect email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Login</h2>
        
        {/* Email Input */}
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <input 
            type="password" 
            placeholder="Password" 
            className={`w-full p-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        
        <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition mb-4 shadow-md">
          Login
        </button>
        
        <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800 block text-center mb-4">
          Forgot Password?
        </Link>
        
        {/* Issue 4 Fix: Don't have an account link */}
        <p className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-emerald-600 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;