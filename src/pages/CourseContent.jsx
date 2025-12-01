// src/pages/CourseContent.jsx
import Sidenav from '../components/Sidenav';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaRegCircle } from 'react-icons/fa'; // FaCheckCircle is already available if you used the previous code

const getCourseContent = (id) => {
    // Mock course data with topics and tasks
    return {
        title: id.toUpperCase().replace('-', ' '),
        topics: [
            { id: 1, title: "Introduction to the Core Concepts", tasks: 2 },
            { id: 2, title: "Setting up the Environment", tasks: 3 },
            { id: 3, title: "Building the First Component", tasks: 4 },
        ],
        totalTasks: 9, // Total tasks for 100% completion
    };
};

const CourseContent = () => {
  const { courseId } = useParams();
  const { user, saveUserToLocalStorage } = useAuth();
  const course = getCourseContent(courseId);

  // Mock progress state (in a real app, this would be structured per course)
  const tasksCompleted = user?.progress || 0; 

  const handleTaskCompletion = () => {
    // Simple mock logic: increment progress by 10%
    const newProgress = Math.min(100, tasksCompleted + 10);
    saveUserToLocalStorage({...user, progress: newProgress});
    toast.success(`Progress updated! You are now ${newProgress}% complete.`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidenav />
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4 text-emerald-600">{course.title} Content</h1>
        <p className="text-xl text-gray-600 mb-6">Progress: {tasksCompleted}%</p>
        
        {/* Progress Bar (Visible here too) */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${tasksCompleted}%` }}
          ></div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Course Topics</h2>
        
        <div className="space-y-4">
          {course.topics.map((topic, index) => (
            <div key={topic.id} className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                    {index + 1}. {topic.title}
                </h3>
                <p className="text-sm text-gray-500">{topic.tasks} tasks included</p>
              </div>

              {/* Mock Completion Button */}
              <button 
                onClick={handleTaskCompletion}
                className="flex items-center space-x-2 text-indigo-600 hover:text-emerald-600 transition"
              >
                <span className="font-semibold hidden sm:inline">Mark Done (Mock)</span>
                <FaRegCircle className="text-xl" />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default CourseContent;