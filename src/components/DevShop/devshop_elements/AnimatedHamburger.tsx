import React from "react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  onClick,
  className = "hover:scale-105 transition-transform duration-300 ease-in-out pointer",
}) => {
  const menuStyles: React.CSSProperties = {
    height: "60px",
    width: "60px",
    position: "relative",
    margin: "auto",
    paddingTop: "12px",
    border: "3px solid transparent",
    borderRadius: "100%",
    transition: "0.3s",
    cursor: "pointer",
    overflow: "hidden",
  };

  const barStyles: React.CSSProperties = {
    height: "3px",
    width: "42px",
    display: "block",
    margin: "6px auto",
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "6px",
    transition: "0.4s",
  };

  const getBarStyle = (barNumber: number): React.CSSProperties => {
    if (!isOpen) return barStyles;

    switch (barNumber) {
      case 1:
        return {
          ...barStyles,
          transform: "translateY(9px) rotate(45deg)",
        };
      case 2:
        return {
          ...barStyles,
          transform: "translateX(60px)",
          transition: "0.6s",
          opacity: 0,
        };
      case 3:
        return {
          ...barStyles,
          transform: "translateY(-9px) rotate(-45deg)",
        };
      default:
        return barStyles;
    }
  };

  const borderAnimationStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "3px solid transparent",
    borderRadius: "100%",
    opacity: isOpen ? 1 : 0,
    transition: "all 1s ease",
    animation: isOpen ? "circle-creation 1s forwards" : undefined,
  };

  return (
    <div className={className}>
      <style>{`
        @keyframes circle-creation {
          0% {
            border-color: transparent;
            transform: rotate(0deg);
          }
          25% {
            border-color: transparent #fff transparent transparent;
            transform: rotate(-35deg);
          }
          50% {
            border-color: transparent #fff #fff transparent;
          }
          75% {
            border-color: transparent #fff #fff #fff;
          }
          100% {
            border-color: #fff;
            transform: rotate(-300deg);
          }
        }
      `}</style>
      <div style={menuStyles} onClick={onClick}>
        <div style={borderAnimationStyle}></div>
        <div style={getBarStyle(1)}></div>
        <div style={getBarStyle(2)}></div>
        <div style={getBarStyle(3)}></div>
      </div>
    </div>
  );
};

export default AnimatedHamburger;
