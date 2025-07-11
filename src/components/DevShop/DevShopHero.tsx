import { CircleBg } from "./devshop_elements/CircleBg";
import SpinningElement from "./devshop_elements/Spinning";

const DevShopHero = () => (
  <section className="py-12 md:py-16 bg-black min-h-screen flex items-center relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />

    <CircleBg />
    <div className="relative z-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8">
          <div className="mb-4">
            <p className="text-gray-400 text-sm uppercase mb-2">
              Nitoons Development Lab
            </p>
            <div
              style={{ fontFamily: "Zen Dots" }}
              className="text-5xl text-transparent sm:text-6xl zen-dots-regular md:text-8xl lg:text-9xl from-[#828282] to-white bg-gradient-to-l bg-clip-text "
            >
              We Build Digital Products
            </div>
            <p className="text-gray-400 text-lg md:text-xl mb-6">
              From concept to launch, we craft exceptional web and mobile
              applications that drive business growth. Your vision, our
              expertise.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                (window.location.href = "mailto:business@nitoons.com")
              }
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </button>
            <a
              href="#portfolio"
              className="border border-gray-600 text-gray-400 px-4 py-2 rounded hover:border-gray-400 hover:text-white transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
        <div className="md:col-span-4">
          <SpinningElement />
        </div>
      </div>
    </div>
  </section>
);

export default DevShopHero;
