// src/pages/Dashboard.jsx
import { useAuth } from '../hooks/useAuth';
import Sidenav from '../components/Sidenav';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaCheckCircle } from 'react-icons/fa'; // Added FaCheckCircle

const mockCourses = [
  { id: 'react', title: 'React Fundamentals: Mobile-First Design' },
  { id: 'tailwind', title: 'Mastering Tailwind CSS' },
  { id: 'javascript', title: 'Advanced JavaScript Concepts' },
];

const Dashboard = () => {
  const { user } = useAuth();
  const progress = user?.progress || 0;
  
  // Get the list of courses the user is registered for
  const registeredCourseIds = user?.courses || [];

  return (
    // Mobile: Stacks Sidenav on top. Desktop: Sidenav on left.
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50"> 
      <Sidenav />
      
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Hello, {user?.name || 'Learner'}!</h1>
        
        {/* Progress Bar and Encouragement */}
        <div className="mb-8 p-4 bg-white rounded-xl shadow-lg border-l-4 border-emerald-500">
          <div className="text-lg font-medium mb-2 text-gray-700">Your Course Progress: {progress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-4 text-gray-500">
            **Explore courses relevant to you** and continue your learning journey.
          </p>
        </div>

        {/* Courses Section */}
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Available Courses</h2>
        <div className="space-y-3">
          {mockCourses.map((course) => {
            // Check if the current user is registered for this course
            const isRegistered = registeredCourseIds.includes(course.id);
            
            // Determine the correct link based on registration status
            const courseLink = isRegistered 
              ? `/course/view/${course.id}`        // Go to content view
              : `/course/register/${course.id}`;   // Go to registration page
            
            return (
              <Link 
                key={course.id}
                to={courseLink} // <-- CONDITIONAL LINK APPLIED HERE
                // Use a different border color for registered courses
                className={`flex justify-between items-center p-4 bg-white rounded-lg shadow-md transition duration-150 ${isRegistered 
                    ? 'border-l-4 border-emerald-500 hover:bg-emerald-50' 
                    : 'border-l-4 border-indigo-400 hover:bg-indigo-50'}`
                }
              >
                <span className="text-lg font-medium text-gray-700">{course.title}</span>
                <div className="flex items-center space-x-2">
                  {isRegistered && (
                    <span className="text-emerald-600 text-sm font-semibold hidden sm:inline">Enrolled</span>
                  )}
                  {/* Icon changes based on registration status */}
                  {isRegistered 
                    ? <FaCheckCircle className="text-emerald-600 text-xl" /> 
                    : <FaChevronRight className="text-indigo-600" />
                  }
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;