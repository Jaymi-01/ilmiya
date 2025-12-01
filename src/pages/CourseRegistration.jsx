// src/pages/CourseRegistration.jsx
import Sidenav from '../components/Sidenav';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

// Mock function to get course details for display
const getCourseDetails = (id) => {
    return { 
        title: id.toUpperCase().replace('-', ' '), 
        overview: `This comprehensive course covers ${id} fundamentals, advanced techniques, and practical projects to make you job-ready.`, 
        syllabus: [
            { id: 1, topic: 'Introduction & Setup' }, 
            { id: 2, topic: 'Core Concepts & Principles' },
            { id: 3, topic: 'Project-Based Learning Modules' }
        ] 
    };
};

const CourseRegistration = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, saveUserToLocalStorage } = useAuth();
  const course = getCourseDetails(courseId);

  // Check if the user is already registered for this specific course
  const isRegistered = user?.courses?.includes(courseId) || false;

  const handleRegister = () => {
    if (!user) {
        toast.error("Please log in to register for a course.");
        navigate('/login');
        return;
    }

    if (isRegistered) {
        // Should be caught by the rendering logic below, but good practice
        toast('You are already registered for this course!', { icon: '💡' });
        navigate(`/course/view/${courseId}`);
        return;
    }

    // Update user's course list
    const updatedCourses = user.courses ? [...user.courses, courseId] : [courseId];
    // Save updated user data to localStorage (DB and active session)
    saveUserToLocalStorage({...user, courses: updatedCourses});

    // Success Toast for course registration
    toast.success(`Registered for ${course.title}! Start learning now.`);
    navigate('/my-courses'); 
  };
  
  // --- Component Rendering ---

  // If the user is registered, show a message and a link to the content page
  if (isRegistered) {
      return (
          <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
              <Sidenav />
              <main className="flex-1 p-4 sm:p-8 overflow-y-auto flex flex-col justify-center items-center text-center">
                  <h1 className="text-3xl font-bold mb-4 text-emerald-600">You Are Already Registered!</h1>
                  <p className="text-xl text-gray-700 mb-8">
                      You've already joined the **{course.title}** course. Ready to continue?
                  </p>
                  <Link 
                      to={`/course/view/${courseId}`}
                      className="mt-4 bg-indigo-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-indigo-700 transition shadow-lg"
                  >
                      Go to Course Content
                  </Link>
                  <Link to="/my-courses" className="mt-4 text-indigo-600 hover:underline">
                      Back to My Courses
                  </Link>
              </main>
          </div>
      );
  }

  // Show the registration form if not registered
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <Sidenav />
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6 text-emerald-600">Register for: {course.title}</h1>
            
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-3 text-indigo-800">Course Overview</h2>
                    <p className="text-gray-700">{course.overview}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-3 text-indigo-800">Course Syllabus</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        {course.syllabus.map((item) => <li key={item.id} className="pl-2">{item.topic}</li>)}
                    </ul>
                </div>
            </div>

            <button 
                onClick={handleRegister}
                className="mt-8 w-full md:w-auto bg-emerald-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-emerald-700 transition shadow-lg"
            >
                Enroll & Start Learning
            </button>
        </main>
    </div>
  );
};
export default CourseRegistration;