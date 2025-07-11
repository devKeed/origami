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
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col p-6">
        <button
          className="self-end text-gray-400 text-2xl"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav className="mt-8 space-y-6">
          <button
            className="w-full text-left text-white text-lg"
            onClick={() => handleNavigate("/home")}
          >
            Products
          </button>
          <button
            className="w-full text-left text-white text-lg"
            onClick={() => handleAnchorClick("#portfolio")}
          >
            Portfolio
          </button>
          <button
            className="w-full text-left text-white text-lg"
            onClick={() => handleAnchorClick("#services")}
          >
            Services
          </button>
          <button
            className="w-full text-left text-blue-500 text-lg"
            onClick={() =>
              (window.location.href = "mailto:business@nitoons.com")
            }
          >
            Contact Us
          </button>
        </nav>
      </div>
    )
  );
};

export default DevShopMenuDialog;
