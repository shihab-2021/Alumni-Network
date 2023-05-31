import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link
              className="text-white py-6 px-2 text-xl font-semibold"
              href="/"
            >
              Alumni Network
            </Link>
          </div>
          <div className="hidden sm:flex items-center justify-center space-x-4">
            <Link className="text-white py-6 px-2" href="/">
              Home
            </Link>
            <Link className="text-white py-6 px-2" href="/dashboard">
              Dashboard
            </Link>
            <Link className="text-white py-6 px-2" href="/contact">
              Contact
            </Link>
            <Link className="text-white py-6 px-2" href="/addMarks">
              Add Marks
            </Link>
            {user?.email ? (
              <button
                className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 rounded"
                  onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Link
                className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 rounded"
                href="/login"
              >
                Login
              </Link>
            )}
          </div>
          <div className="sm:hidden">
            <button
              className="text-white py-6 px-2 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link className="text-white block py-2 px-4" href="/dashboard">
              Dashboard
            </Link>
            <Link className="text-white block py-2 px-4" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
