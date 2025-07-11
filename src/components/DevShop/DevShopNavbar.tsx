import React, { useState, useEffect } from "react";
import DevShopMenuDialog from "./DevShopMenuDialog";
import AnimatedHamburger from "./devshop_elements/AnimatedHamburger";

const DevShopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if we're in desktop mode
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isDesktop) {
      setMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isDesktop) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className=" top-0 bg-black ">
        <div className="container mx-auto flex items-center justify-between py-6 sm:py-10 px-4">
          <img src="/nitoons_logo.svg" width="180" alt="Nitoons logo" />
          {/* Menu toggle */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatedHamburger
              isOpen={isDesktop ? menuOpen || isHovered : menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <DevShopMenuDialog
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DevShopNavbar;
