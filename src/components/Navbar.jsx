import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-[#1a1a1a] h-[60px] flex items-center justify-between px-4 rounded-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="DojoHunt" className="h-8" />
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 bg-[#2a2a2a] rounded-lg text-white focus:outline-none"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white">
          <i className="fas fa-user"></i>
        </button>
        <button className="text-white">
          <i className="fas fa-clock"></i>
        </button>
        <button className="text-white">
          <i className="fas fa-bell"></i>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-400">
          {/* Profile picture placeholder */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 