import React, { useState } from "react";
import DevShopMenuDialog from "./DevShopMenuDialog";
import AnimatedHamburger from "./devshop_elements/AnimatedHamburger";

const DevShopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 bg-black ">
        <div className="container mx-auto flex items-center justify-between py-6 sm:py-10 px-4">
          <img src="/nitoons_logo.svg" width="180" alt="Nitoons logo" />
          {/* Mobile menu button */}
          <div className="md:hidden">
            <AnimatedHamburger
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
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
