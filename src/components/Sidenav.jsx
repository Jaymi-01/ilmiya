// src/components/Sidenav.jsx
import { Link, useNavigate } from 'react-router-dom'; // <-- useNavigate imported
import { RiDashboardLine, RiBookOpenLine, RiUserSettingsLine, RiLogoutBoxLine } from 'react-icons/ri';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Sidenav = () => {
  const { clearUserFromLocalStorage } = useAuth();
  const navigate = useNavigate(); // <-- Initialized
  
  const handleLogout = () => {
    clearUserFromLocalStorage();
    toast('Logged out successfully. See you soon!', { icon: '👋' });
    navigate('/login'); // <-- **Issue 7 Fix: Redirects to login**
  };

  const navItems = [
    { to: "/dashboard", icon: RiDashboardLine, label: "Dashboard" },
    { to: "/my-courses", icon: RiBookOpenLine, label: "View My Courses" },
    { to: "/profile", icon: RiUserSettingsLine, label: "Update My Profile" },
  ];

  return (
    <div className="w-full md:w-64 bg-indigo-800 text-white p-4 flex md:flex-col shadow-xl flex-shrink-0">
      <div className="text-2xl font-bold mb-4 md:mb-8 hidden md:block text-emerald-400">ilmiya</div>
      
      <nav className="flex-1 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-2 overflow-x-auto">
        {navItems.map(item => (
          <Link 
            key={item.to} 
            to={item.to} 
            className="flex items-center p-2 md:p-3 rounded-lg hover:bg-indigo-700 transition flex-shrink-0"
          >
            <item.icon className="mr-0 md:mr-3 text-xl" />
            <span className="hidden md:inline">{item.label}</span> 
          </Link>
        ))}

        <button 
          onClick={handleLogout} 
          className="flex items-center p-2 md:p-3 rounded-lg hover:bg-red-600 text-left transition md:mt-auto flex-shrink-0"
        >
          <RiLogoutBoxLine className="mr-0 md:mr-3 text-xl" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </nav>
    </div>
  );
};
export default Sidenav;