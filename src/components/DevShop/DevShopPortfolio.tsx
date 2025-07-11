import React from "react";

const portfolioItems = [
  {
    title: "Heyfood",
    description:
      "Seamless food delivery platform connecting restaurants with hungry customers through real-time tracking and intelligent order management.",
    tags: ["Food Delivery", "Mobile App", "Marketplace"],
    link: "https://heyfood.africa",
  },
  {
    title: "Pledre",
    description:
      "Modern learning management system empowering educators to create and deliver engaging online courses with advanced analytics.",
    tags: ["EdTech", "LMS", "SaaS"],
    link: "https://pledre.com",
  },
  {
    title: "OneTake.pro",
    description:
      "AI-powered video editing platform that transforms raw footage into polished content with intelligent automation and one-click processing.",
    tags: ["AI/ML", "Video Processing", "SaaS"],
    link: "https://onetake.pro",
  },
  {
    title: "Scriptwriter",
    description:
      "Professional screenplay writing tool with real-time collaboration, industry-standard formatting, and advanced revision tracking.",
    tags: ["Creative Tools", "Collaboration", "Web App"],
    link: "https://scriptwriter.nitoons.com",
  },
  {
    title: "Storyteller",
    description:
      "Interactive storytelling platform that brings narratives to life with multimedia integration and immersive user experiences.",
    tags: ["Content Creation", "Interactive Media", "Platform"],
    link: "https://storyteller.nitoons.com",
  },
];

const DevShopPortfolio = () => (
  <section id="portfolio" className="py-12 md:py-16 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-sm uppercase mb-2">Our Work</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Our Portfolio
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Innovative products we've built from the ground up.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            onClick={() => window.open(item.link, "_blank")}
            className="cursor-pointer border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 bg-gray-900 flex items-center justify-center border-b border-gray-700">
              <span className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DevShopPortfolio;
