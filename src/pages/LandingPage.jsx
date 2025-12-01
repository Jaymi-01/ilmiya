// src/pages/LandingPage.jsx
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50"> 
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center">
        
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
            Learn Anything, Anywhere with <span className="text-emerald-600">ilmiya</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Your personalized platform for skill acquisition. Track your progress, explore diverse fields, and join a thriving community.
          </p>
          
          <Link 
            to="/signup" 
            className="inline-block bg-emerald-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-emerald-700 transition duration-300 transform hover:-translate-y-0.5"
          >
            Explore Courses
          </Link>
        </div>
      </main>

      {/* Footer can be added here */}
    </div>
  );
};
export default LandingPage;