import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("white");

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Hide default cursor
    document.body.style.cursor = "none";

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth cursor following animation
    const animateCursor = () => {
      const speed = 0.15;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      gsap.set(cursor, {
        x: cursorX - 15, // Center the cursor (30px diameter / 2)
        y: cursorY - 15,
      });

      requestAnimationFrame(animateCursor);
    };

    // Handle hover effects on interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);

      // Use only white or black colors
      setCursorColor("black");

      // Scale and morph animation - enhanced scaling
      gsap.to(cursor, {
        scale: 2.5,
        duration: 0.4,
        ease: "back.out(2)",
      });

      // Add blobby morphing effect
      gsap.to(cursor, {
        borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
        duration: 0.4,
        ease: "power2.out",
        yoyo: true,
        repeat: -1,
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorColor("white");

      // Reset scale and shape
      gsap.killTweensOf(cursor);
      gsap.to(cursor, {
        scale: 1,
        borderRadius: "50%",
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    };

    // Add click effect for more interaction feedback
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: isHovering ? 2 : 0.8,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: isHovering ? 2.5 : 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      });
    };

    // Add event listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "button, a, input, textarea, select, [role='button'], .interactive, [data-interactive]"
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      return interactiveElements;
    };

    // Initial setup
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    const elements = addHoverListeners();
    animateCursor();

    // Observer for dynamically added elements
    const observer = new MutationObserver(() => {
      // Remove old listeners
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      // Add new listeners
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: cursorColor,
        borderRadius: "50%",
        transition: "background-color 0.2s ease",
        filter: isHovering
          ? "blur(0px) drop-shadow(0 0 20px rgba(255,255,255,0.6))"
          : "blur(0px)",
        boxShadow: isHovering
          ? `0 0 30px ${cursorColor}40, 0 0 60px ${cursorColor}20`
          : "none",
      }}
    />
  );
};

export default CustomCursor;
