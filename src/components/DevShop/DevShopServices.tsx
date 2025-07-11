import React from "react";

const primaryServices = [
  {
    title: "Talent Outsourcing",
    subtitle: "Scale Your Team Instantly",
    description:
      "Access our pool of pre-vetted, highly skilled developers ready to integrate seamlessly with your team. From React experts to full-stack engineers, we provide the talent you need, when you need it.",
    benefits: [
      "Pre-screened top 3% developers",
      "Flexible engagement models",
      "Time zone alignment",
      "Dedicated project managers",
    ],
    highlight: "Most Popular",
  },
  {
    title: "App Development",
    subtitle: "From Concept to Launch",
    description:
      "Transform your vision into reality with our end-to-end application development services. We build scalable, modern applications using cutting-edge technologies and industry best practices.",
    benefits: [
      "Full-stack development",
      "Mobile & web applications",
      "Agile methodology",
      "Post-launch support",
    ],
    highlight: "End-to-End",
  },
  {
    title: "Technical Consultations",
    subtitle: "Expert Guidance On-Demand",
    description:
      "Navigate complex technical decisions with confidence. Our senior consultants provide strategic guidance on architecture, technology selection, and implementation roadmaps.",
    benefits: [
      "Architecture reviews",
      "Technology roadmaps",
      "Performance optimization",
      "Security assessments",
    ],
    highlight: "Strategic",
  },
];

const DevShopServices = () => (
  <section id="services" className="py-12 md:py-16 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-sm uppercase mb-2">What We Offer</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Empowering businesses with expert talent, cutting-edge development,
          and strategic technical guidance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {primaryServices.map((service, idx) => (
          <div
            key={idx}
            className="relative p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition"
          >
            {service.highlight && (
              <span className="absolute top-4 right-4 text-gray-400 uppercase text-xs">
                {service.highlight}
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">{service.subtitle}</p>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DevShopServices;
