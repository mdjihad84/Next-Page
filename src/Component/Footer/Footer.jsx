import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Footer Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-white">Next-Page</div>
            <p className="text-white text-sm">
              We provide modern solutions with cutting-edge technologies. Join
              us in creating a better digital world.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#Services" className="text-white hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#Popular" className="text-white hover:text-white">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-white">
          <p>&copy; 2024 MyBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
