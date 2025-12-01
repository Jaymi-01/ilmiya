// src/pages/MyCourses.jsx
import Sidenav from '../components/Sidenav';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

// Mock function to get full course titles from IDs
const getCourseTitle = (id) => {
    switch (id) {
        case 'react': return 'React Fundamentals: Mobile-First Design';
        case 'tailwind': return 'Mastering Tailwind CSS';
        case 'javascript': return 'Advanced JavaScript Concepts';
        default: return 'Unknown Course';
    }
}

const MyCourses = () => {
  const { user } = useAuth();
  
  // Get the registered course IDs, defaulting to an empty array
  const registeredCourses = user?.courses || [];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidenav />
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8">My Registered Courses</h1>

        {registeredCourses.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-xl shadow-lg">
            <FaBookOpen className="text-6xl text-emerald-400 mx-auto mb-4" />
            <p className="text-xl text-gray-700 mb-4">You are not currently registered for any courses.</p>
            <Link to="/dashboard" className="text-emerald-600 hover:underline font-semibold">
              Explore available courses on the Dashboard!
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {registeredCourses.map((courseId) => (
              <div 
                key={courseId} 
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border-l-4 border-emerald-500"
              >
                <span className="text-lg font-medium text-gray-700">{getCourseTitle(courseId)}</span>
                <Link 
                  to={`/course/${courseId}`} 
                  className="bg-indigo-600 text-white py-1 px-3 text-sm rounded-full hover:bg-indigo-700 transition"
                >
                  View Course
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
export default MyCourses;