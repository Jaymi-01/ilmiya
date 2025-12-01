// src/pages/ContactUs.jsx
import Header from '../components/Header';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions? Reach out to us at <a href="mailto:support@ilmiya.com" className="text-emerald-600 hover:underline">support@ilmiya.com</a>.
        </p>
        <div className="mt-8">
            {/* You would add a contact form here */}
            <p className="text-sm text-gray-500">Form coming soon!</p>
        </div>
      </main>
    </div>
  );
};
export default ContactUs;