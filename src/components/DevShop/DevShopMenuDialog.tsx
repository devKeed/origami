import React from "react";

interface DevShopMenuDialogProps {
  open: boolean;
  onClose: () => void;
}

const DevShopMenuDialog = ({ open, onClose }: DevShopMenuDialogProps) => {
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
          className="w-full text-left text-white text-lg"
          style={{
            animation: open ? "drop 0.4s 0.1s forwards ease-out" : undefined,
          }}
          onClick={() => handleNavigate("/home")}
        >
          Products
        </button>
        <button
          className="w-full text-left text-white text-lg"
          style={{
            animation: open ? "drop 0.4s 0.15s forwards ease-out" : undefined,
          }}
          onClick={() => handleAnchorClick("#portfolio")}
        >
          Portfolio
        </button>
        <button
          className="w-full text-left text-white text-lg"
          style={{
            animation: open ? "drop 0.4s 0.2s forwards ease-out" : undefined,
          }}
          onClick={() => handleAnchorClick("#services")}
        >
          Services
        </button>
        <button
          className="w-full text-left text-blue-500 text-lg"
          style={{
            animation: open ? "drop 0.4s 0.25s forwards ease-out" : undefined,
          }}
          onClick={() => (window.location.href = "mailto:business@nitoons.com")}
        >
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default DevShopMenuDialog;
