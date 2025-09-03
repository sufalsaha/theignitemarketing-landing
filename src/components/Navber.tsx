import { Link } from "react-router-dom";
import logo from "../assets/icon/image 30.svg";
// import { SheetSideww } from "./selidermenu";
// import { SheetSide } from "./selidermenu";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f4f2f7] shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12" />
          {/* <div className="hidden md:block">
            <h1 className="font-bold text-sm">THE IGNITE</h1>
            <p className="text-xs tracking-wide">MARKETING</p>
          </div> */}
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center space-x-6 border border-gray-300 rounded-full px-6 py-2 bg-white">
          <Link to="/" className="text-pink-500 font-medium">
            Home
          </Link>
          <Link to="/who-we-are" className="text-gray-700 hover:text-pink-500">
            Who We Are
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-pink-500 flex items-center gap-1">
              Services ▾
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-40">
              <Link
                to="/services/seo"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                SEO
              </Link>
              <Link
                to="/services/smm"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Social Media
              </Link>
              <Link
                to="/services/content"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Content
              </Link>
            </div>
          </div>
          <Link to="/our-work" className="text-gray-700 hover:text-pink-500">
            Our Work
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-500">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-500">
            Contact Us
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-pink-500">
            Portfolio Video
          </Link>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to="/book"
            className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-blue-500 shadow-md"
          >
            Book Now
          </Link>

          {/* <SheetSideww /> */}
        </div>
      </div>
    </nav>
  );
}
