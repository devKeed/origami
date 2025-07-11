import React from "react";

export const HeroLines = () => {
  return (
    <div className="relative flex items-center justify-center h-[200px] md:h-[300px]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        {[...Array(5)].map((_, index) => {
          const width = 60 + Math.random() * 120;
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded bg-gray-700"
              style={{ width: `${width}px`, height: "3px" }}
            >
              <div className="absolute top-0 left-0 h-full bg-gray-400 animate-pulse" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
