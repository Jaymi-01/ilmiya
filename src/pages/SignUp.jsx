// src/pages/SignUp.jsx
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { saveUserToLocalStorage } = useAuth();
  
  const onSubmit = (data) => {
    const allUsers = JSON.parse(localStorage.getItem('ilmiyaUserDB') || '[]');
    const userExists = allUsers.find(u => u.email === data.email);

    if (userExists) {
        // Issue 2 Fix: User Already Exists
        toast.error("Account already exists with this email. Please log in.");
        return;
    }

    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password, // Stored for mock login check
      isLoggedIn: true,
      progress: 0,
      courses: [], 
    };

    // Save ALL users to the mock database list
    allUsers.push(newUser);
    localStorage.setItem('ilmiyaUserDB', JSON.stringify(allUsers));
    
    // Set the current active user
    saveUserToLocalStorage(newUser); 
    
    toast.success(`Welcome to ilmiya, ${data.name}! Let's start learning.`);
    navigate('/dashboard'); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-600">Create Your Profile</h2>
        
        {/* Name Input */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Name" 
            className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

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
        
        {/* Phone Number Input */}
        <div className="mb-4">
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            {...register("phone", { 
              required: "Phone Number is required",
              pattern: { value: /^[0-9]+$/, message: "Must be a valid number" }
            })}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        
        {/* Password Input */}
        <div className="mb-6">
          <input 
            type="password" 
            placeholder="Password" 
            className={`w-full p-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            {...register("password", { 
              required: "Password is required", 
              minLength: { value: 6, message: "Password must be at least 6 characters" } 
            })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        
        <button type="submit" className="w-full bg-emerald-600 text-white p-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md">
          Sign Up
        </button>
        
        <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;