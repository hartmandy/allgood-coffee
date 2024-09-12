import logo from "./logo.png";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-300  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="All Good Logo" width={100} height={100} />
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <a href="https://www.facebook.com/AllgoodCoffee">
              <FaFacebook className="text-3xl mb-2" />
            </a>
            <p>10 S. Main Street</p>
            <p>Weaverville, NC 28787</p>
            <p>828-484-8663</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 text-center text-sm">
          © {new Date().getFullYear()} All Good Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
