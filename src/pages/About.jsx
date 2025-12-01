// src/pages/About.jsx
import Header from '../components/Header';

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

        {/* --- General Information --- */}
        <section className="max-w-4xl mx-auto mt-12 pt-6 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4 text-center">Why Choose ilmiya?</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mx-auto max-w-2xl">
                <li>**Mobile-First Design:** Learn effectively on any device, anywhere.</li>
                <li>**Practical Courses:** Focus on skills immediately applicable in the workforce.</li>
                <li>**Community Focused:** Connect with peers and mentors for shared growth.</li>
            </ul>
        </section>

      </main>
    </div>
  );
};
export default About;