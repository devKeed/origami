import React from "react";

export const CircleBg = () => {
  return (
    <div>
      {/* Large background SVG */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[150%] md:h-[120%] opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient
              id="bg-gradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient
              id="bg-gradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6B7280" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Large animated circles */}
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="url(#bg-gradient1)"
            strokeWidth="3"
            opacity="0.5"
          >
            <animate
              attributeName="r"
              values="300;320;300"
              dur="6s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 400 400"
              to="360 400 400"
              dur="30s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="400"
            cy="400"
            r="240"
            fill="none"
            stroke="url(#bg-gradient2)"
            strokeWidth="3"
            opacity="0.4"
          >
            <animate
              attributeName="r"
              values="240;220;240"
              dur="5s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 400 400"
              to="0 400 400"
              dur="25s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="400"
            cy="400"
            r="180"
            fill="none"
            stroke="url(#bg-gradient1)"
            strokeWidth="3"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="180;200;180"
              dur="5.5s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 400 400"
              to="360 400 400"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Large code brackets */}
          <g transform="translate(400, 400)">
            <text
              x="-120"
              y="40"
              fontSize="160"
              fill="#E5E7EB"
              fontFamily="monospace"
              fontWeight="300"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.5;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
              &lt;
            </text>
            <text
              x="0"
              y="40"
              fontSize="160"
              fill="#9CA3AF"
              fontFamily="monospace"
              fontWeight="300"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.5;0.3"
                dur="3s"
                begin="0.5s"
                repeatCount="indefinite"
              />
              /
            </text>
            <text
              x="60"
              y="40"
              fontSize="160"
              fill="#E5E7EB"
              fontFamily="monospace"
              fontWeight="300"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.5;0.3"
                dur="3s"
                begin="1s"
                repeatCount="indefinite"
              />
              &gt;
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
