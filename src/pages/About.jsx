// src/pages/About.jsx
import Header from '../components/Header';
import { FaCheckCircle } from 'react-icons/fa'; // Importing a suitable icon

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-4 sm:p-8">
        <header className="text-center py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-2">About ilmiya</h1>
          <p className="text-xl text-gray-600">Your partner in perpetual learning and growth.</p>
        </header>

        {/* --- Mission and Vision Section --- */}
        <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            
          {/* Mission */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-emerald-600">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3 flex items-center">
                🚀 Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
                To democratize education by providing high-quality, mobile-first learning experiences that empower individuals globally to acquire practical skills and achieve their professional potential.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
            <h2 className="text-2xl font-bold text-indigo-600 mb-3 flex items-center">
                ✨ Our Vision
            </h2>
            <p className="text-gray-700 text-lg">
                To be the leading personalized learning platform, recognized for innovation, community engagement, and creating measurable career advancement for every user.
            </p>
          </div>
        </section>

        {/* --- Why Choose ilmiya? (Fixes Mobile Alignment) --- */}
        <section className="max-w-4xl mx-auto mt-12 pt-6 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Why Choose ilmiya?</h2>
            
            <div className="space-y-4 mx-auto max-w-2xl">
                
                {/* Reason 1: Mobile-First Design */}
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-md">
                    <FaCheckCircle className="text-xl text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 text-left">
                        <span className="font-semibold">Mobile-First Design:</span> Learn effectively on any device, anywhere, ensuring a seamless experience whether you use a phone, tablet, or desktop.
                    </p>
                </div>
                
                {/* Reason 2: Practical Courses */}
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-md">
                    <FaCheckCircle className="text-xl text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 text-left">
                        <span className="font-semibold">Practical Courses:</span> Our curriculum focuses on skills immediately applicable in the workforce, turning theory into real-world capability.
                    </p>
                </div>
                
                {/* Reason 3: Community Focused */}
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-md">
                    <FaCheckCircle className="text-xl text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 text-left">
                        <span className="font-semibold">Community Focused:</span> Connect with peers and mentors through our platform for shared growth, feedback, and support.
                    </p>
                </div>

            </div>
        </section>

      </main>
    </div>
  );
};
export default About;