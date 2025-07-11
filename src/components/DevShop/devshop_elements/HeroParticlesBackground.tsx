"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // inject particles.js script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => console.log("Particles.js loaded");
    script.onerror = () => console.error("Failed to load particles.js");
    document.body.appendChild(script);

    // initialize particles when library is ready
    const initParticles = () => {
      if (typeof window !== "undefined" && (window as any).particlesJS) {
        console.log("Initializing particles...");
        (window as any).particlesJS("particles-js", {
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#00faff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            opacity: {
              value: 0.6,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00faff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });

        // Add manual event listeners as fallback
        const canvas = document.querySelector(
          "#particles-js canvas"
        ) as HTMLCanvasElement;
        if (canvas) {
          console.log("Canvas found, adding event listeners...");

          canvas.addEventListener("mousemove", (e) => {
            console.log("Mouse move detected");
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Trigger repulse effect manually if needed
            if ((window as any).pJSDom && (window as any).pJSDom[0]) {
              const pJS = (window as any).pJSDom[0].pJS;
              if (pJS && pJS.interactivity) {
                pJS.interactivity.mouse.pos_x = x;
                pJS.interactivity.mouse.pos_y = y;
              }
            }
          });

          canvas.addEventListener("click", () => {
            console.log("Click detected");
            // Manual particle addition
            if ((window as any).pJSDom && (window as any).pJSDom[0]) {
              const pJS = (window as any).pJSDom[0].pJS;
              if (pJS && pJS.fn && pJS.fn.modes && pJS.fn.modes.pushParticles) {
                pJS.fn.modes.pushParticles(4, pJS.interactivity.mouse);
              }
            }
          });
        }
      }
    };

    const interval = setInterval(() => {
      const particlesLibReady =
        typeof (window as any).particlesJS !== "undefined";
      console.log("Checking particles library:", particlesLibReady);

      if (particlesLibReady) {
        clearInterval(interval);
        initParticles();

        const count_particles = document.querySelector(
          ".js-count-particles"
        ) as HTMLElement;

        const update = () => {
          const particles = (window as any).pJSDom?.[0]?.pJS?.particles?.array;
          if (particles && count_particles) {
            count_particles.innerText = particles.length.toString();
          }
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // render container for particles
  return (
    <div className="relative w-full h-full">
      <div id="particles-js" className="absolute inset-0" />
    </div>
  );
}
