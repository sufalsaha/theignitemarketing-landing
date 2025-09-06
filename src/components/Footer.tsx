import React from "react";
import logo from "../assets/allimg/image 30.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              {/* This is a placeholder for the logo. You should replace the src with your actual logo path. */}
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="The Ignite Marketing Logo"
                  className="w-[70px]"
                />
              </Link>
            </div>
            <p className="text-sm max-w-sm">
              Empowering businesses with insightful data analysis solutions to
              drive informed decision-making and innovation.
            </p>
          </div>

          {/* Who we are section */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Who we are</h4>
            <a href="#" className="text-sm hover:underline">
              Our work
            </a>
            <a href="#" className="text-sm hover:underline">
              About us
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact us
            </a>
          </div>

          {/* Services section */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Services</h4>
            <a href="#" className="text-sm hover:underline">
              Digital Marketing
            </a>
            <a href="#" className="text-sm hover:underline">
              Market research
            </a>
            <a href="#" className="text-sm hover:underline">
              Creative layouts
            </a>
            <a href="#" className="text-sm hover:underline">
              SEO & Backlinks
            </a>
            <a href="#" className="text-sm hover:underline">
              Email Marketing
            </a>
            <a href="#" className="text-sm hover:underline">
              Brand Development
            </a>
          </div>

          {/* Legal section */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Legal</h4>
            <a href="#" className="text-sm hover:underline">
              Terms conditions
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Cookies policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Data processing
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-500">
          <p>© 2025 THEIGNITEMARKETING</p>
          <div className="flex space-x-4">
            {/* Social media icons. You'll need to add SVGs or use a library like 'react-icons'. */}
            <a href="#" aria-label="LinkedIn">
              {/* Replace with your LinkedIn SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              {/* Replace with your YouTube SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A51 51 0 0 0 12 4c-2.45 0-4.9.06-7.59.32a2.78 2.78 0 0 0-1.94 2A29.74 29.74 0 0 0 2 12a29.74 29.74 0 0 0 .47 5.58A2.78 2.78 0 0 0 4.41 20a51 51 0 0 0 7.59.32A51 51 0 0 0 19.59 20a2.78 2.78 0 0 0 1.94-2A29.74 29.74 0 0 0 22 12a29.74 29.74 0 0 0-.46-5.58z"></path>
                <path d="m15 12-6 4v-8l6 4z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              {/* Replace with your Instagram SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Email">
              {/* Replace with your Email SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="m22 6-10 7L2 6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
