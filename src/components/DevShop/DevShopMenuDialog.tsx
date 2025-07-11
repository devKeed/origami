import React, { useRef } from "react";
import { gsap } from "gsap";

interface DevShopMenuDialogProps {
  open: boolean;
  onClose: () => void;
}

const DevShopMenuDialog = ({ open, onClose }: DevShopMenuDialogProps) => {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleNavigate = (path: string) => {
    window.location.href = path;
    onClose();
  };

  const handleAnchorClick = (anchor: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(anchor);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // GSAP hover animations
  const handleMouseEnter = (index: number) => {
    const button = itemRefs.current[index];
    if (!button) return;

    // Change cursor to pointer
    button.style.cursor = "pointer";

    // Create timeline for entrance animation
    const tl = gsap.timeline();

    tl.to(button, {
      scale: 1.05,
      x: 10,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(
        button,
        {
          color: "#ffffff",
          textShadow:
            "0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.3)",
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        button,
        {
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)",
          border: "1px solid rgba(255,255,255,0.3)",
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );
  };

  const handleMouseLeave = (index: number) => {
    const button = itemRefs.current[index];
    if (!button) return;

    // Reset cursor
    button.style.cursor = "default";

    // Create timeline for exit animation
    const tl = gsap.timeline();

    tl.to(button, {
      scale: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(
        button,
        {
          color: "#ffffff", // Keep all white
          textShadow: "none",
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        button,
        {
          backgroundImage: "none",
          border: "1px solid transparent",
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );
  };

  return (
    <div
      className={`absolute right-4 top-full mt-2 w-56 bg-black bg-opacity-90 rounded shadow-lg z-50 transform transition-all duration-500 origin-top ${
        open
          ? "scale-y-100 opacity-100"
          : "scale-y-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Drop animation keyframes */}
      <style>{`
        @keyframes drop {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <nav className="flex flex-col p-4 space-y-4">
        {/* <button
          className="self-end text-gray-400 text-2xl"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button> */}
        {/* Menu items */}
        <button
          ref={(el) => (itemRefs.current[0] = el)}
          className="w-full text-left text-white text-lg px-3 py-2 rounded-lg transition-all duration-200"
          style={{
            animation: open ? "drop 0.4s 0.1s forwards ease-out" : undefined,
          }}
          onClick={() => handleNavigate("/home")}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          data-interactive="true"
        >
          Products
        </button>
        <button
          ref={(el) => (itemRefs.current[1] = el)}
          className="w-full text-left text-white text-lg px-3 py-2 rounded-lg transition-all duration-200"
          style={{
            animation: open ? "drop 0.4s 0.15s forwards ease-out" : undefined,
          }}
          onClick={() => handleAnchorClick("#portfolio")}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          data-interactive="true"
        >
          Portfolio
        </button>
        <button
          ref={(el) => (itemRefs.current[2] = el)}
          className="w-full text-left text-white text-lg px-3 py-2 rounded-lg transition-all duration-200"
          style={{
            animation: open ? "drop 0.4s 0.2s forwards ease-out" : undefined,
          }}
          onClick={() => handleAnchorClick("#services")}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          data-interactive="true"
        >
          Services
        </button>
        <button
          ref={(el) => (itemRefs.current[3] = el)}
          className="w-full text-left text-white text-lg px-3 py-2 rounded-lg transition-all duration-200"
          style={{
            animation: open ? "drop 0.4s 0.25s forwards ease-out" : undefined,
          }}
          onClick={() => (window.location.href = "mailto:business@nitoons.com")}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          data-interactive="true"
        >
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default DevShopMenuDialog;
