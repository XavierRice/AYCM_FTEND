import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold text-lg mb-4">About</h5>
                <ul className="space-y-2">
                  <li><Link to="/caldron" className="text-gray-600 hover:text-gray-900"/>Caldron</li>
                  <li><Link to="/apothecary" className="text-gray-600 hover:text-gray-900"/>Apothecary</li>
                  <li><Link to="/register" className="text-gray-600 hover:text-gray-900"/>Join the Crew!</li>
                  <li><Link to="#" className="text-gray-600 hover:text-gray-900"/>Our Contributors</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-4">Connect</h5>
                <ul className="space-y-2">
                  <li><Link to="/aboutus" className="text-gray-600 hover:text-gray-900"/>About Us</li>
                  <li><Link to="#" className="text-gray-600 hover:text-gray-900"/>Contact Us</li>
                  <li><Link to="/" className="text-gray-600 hover:text-gray-900"/>FAQs</li>
                  <li><Link to="#" className="text-gray-600 hover:text-gray-900"/>Get the App</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h5 className="font-bold text-lg mb-4">Subscribe to our Patron</h5>
            <form className="flex mt-3 mb-4">
              <input
                type="email"
                className="flex-grow rounded-l-md border-0 p-2 focus:ring-2 focus:ring-gray-200"
                placeholder="Your Email"
              />
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition duration-300"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 pb-8">
          <p className="text-sm text-gray-600">
            © 2024 Copyright by{" "}
            <Link to="#" className="text-gray-900 hover:underline"/>
              AYCM
           
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;