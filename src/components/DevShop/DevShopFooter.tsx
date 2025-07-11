import React from "react";

const DevShopFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg">
              Let's discuss how we can help transform your ideas into successful
              digital products.
            </p>
            <button
              onClick={() =>
                (window.location.href = "mailto:business@nitoons.com")
              }
              className="px-6 py-2 border border-gray-600 text-gray-400 rounded hover:border-gray-400 hover:text-white transition"
            >
              Get in touch
            </button>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-gray-200 text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-gray-200 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-gray-200 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Connect</h4>
            <p className="text-gray-400 mb-2 text-sm">business@nitoons.com</p>
            <p className="text-gray-600 text-xs">
              Follow us on social media for updates
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-700 flex items-center justify-between">
          <span className="text-lg font-medium">Nitoons Labs</span>
          <span className="text-gray-600 text-xs">© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
};

export default DevShopFooter;
