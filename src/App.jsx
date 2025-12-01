// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import Pages (Ensure these files physically exist)
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseRegistration from './pages/CourseRegistration';
import CourseContent from './pages/CourseContent'; // <-- NEW
import Profile from './pages/Profile'; 
import ContactUs from './pages/ContactUs'; 
import About from './pages/About'; 
import MyCourses from './pages/MyCourses'; 
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <BrowserRouter>
      {/* Global Toaster for notifications */}
      <Toaster position="top-center" reverseOrder={false} /> 
      
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/about" element={<About />} />          
        <Route path="/forgot-password" element={<div>Forgot Password Page Placeholder</div>} />

        {/* Private/Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-courses" element={<MyCourses />} />
          
          {/* VITAL FIX: Define two distinct dynamic routes for courses */}
          <Route 
             path="/course/register/:courseId" 
             element={<CourseRegistration />} 
          />
          <Route 
             path="/course/view/:courseId" 
             element={<CourseContent />} 
          />
        </Route>
        
        {/* Fallback 404 Route */}
        <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
                <p className="text-xl text-gray-700">Page Not Found</p>
                <Link to="/" className="mt-6 text-indigo-600 hover:underline">Go Home</Link>
            </div>
        } /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;