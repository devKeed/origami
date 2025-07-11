import React, { useState } from "react";
import DevShopMenuDialog from "./DevShopMenuDialog";

const DevShopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 bg-black border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <img src="/nitoons_logo.svg" width="180" alt="Nitoons logo" />
          {/* Mobile menu button */}
          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <button
              onClick={() =>
                (window.location.href = "mailto:business@nitoons.com")
              }
              className="px-4 py-2 border border-gray-600 text-gray-400 rounded hover:border-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      <DevShopMenuDialog open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default DevShopNavbar;
