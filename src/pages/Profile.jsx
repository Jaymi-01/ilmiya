// src/pages/Profile.jsx
import Sidenav from '../components/Sidenav';
import { useAuth } from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, saveUserToLocalStorage } = useAuth();
  
  // Initialize form with current user data
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    }
  });

  const onSubmit = (data) => {
    // 1. Update user data in local storage
    const updatedUser = { ...user, ...data };
    saveUserToLocalStorage(updatedUser);

    // 2. SUCCESS TOAST NOTIFICATION
    toast.success("Profile successfully updated!");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidenav />
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">Update My Profile</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
          
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input 
              type="text" 
              className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Input (Read-only since it's hardcoded into the initial sign-up mock) */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input 
              type="tel" 
              className="w-full p-3 border rounded-lg bg-gray-100"
              value={user?.phone || 'N/A'}
              readOnly 
            />
          </div>
          
          <button type="submit" className="w-full bg-emerald-600 text-white p-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md">
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
};
export default Profile;