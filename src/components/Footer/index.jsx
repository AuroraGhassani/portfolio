import React from "react";
import { FiMail, FiMessageSquare } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-8 px-6 pt-20 pb-10 text-center text-gray-800 bg-gray-300">
            {/* Icon Header */}
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full">
                    <FiMessageSquare size={24} className="text-black" />
                </div>
                <h2 className="text-2xl font-semibold">Let's connect and discuss about your next project</h2>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-4">
            <a href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 text-white transition-transform duration-300 bg-black rounded-full shadow-md hover:scale-105 hover:shadow-lg">
                WhatsApp
            </a>

                <a href="/AboutMe" 
                    className="flex items-center gap-2 px-6 py-2 text-black transition-transform duration-300 border border-black rounded-full shadow-md hover:scale-105 hover:shadow-lg">
                    About Me
                </a>
            </div>

            {/* Social Links & Copyright */}
            <div className="flex flex-col items-center w-full max-w-4xl pt-20 md:flex-row md:justify-between">
                {/* Social Links */}
                <div className="flex gap-4 text-sm text-gray-600">
                    <a href="https://www.linkedin.com/in/auroraghassani/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 hover:text-black">
                        LinkedIn
                    </a> /
                    <a href="https://vercel.com/auroraghassanis-projects" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 hover:text-black">
                        Vercel
                    </a> /
                    <a href="https://www.instagram.com/auroraghsn/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 hover:text-black">
                        Instagram
                    </a>
                </div>

                {/* Copyright */}
                <p className="mt-3 text-sm text-gray-500 md:mt-0">© 2024 All rights reserved.</p>  
            </div>
        </footer>
    );
};

export default Footer;
