import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import NewsLetter from "../newsletter/newsletter";


    
        export default function Footer() {
            return (
                <> <NewsLetter/>
        <footer className="bg-gray-100 w-full h-auto pt-16 pb-8 px-4 sm:px-8 lg:px-20">
                        {/* Footer Links Section */}
                        <div className="container mx-auto px-4 py-8 mt-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Shop Info */}
                            <div>
                                <h3 className="font-bold text-lg">SHOP.CO</h3>
                                <p className="text-gray-600 mt-2">
                                    We have clothes that suit your style and which you're proud to wear. From women to men.
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black ">
                                    <FaTwitter />
                                    </a>
                                    <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black">
                                    <FaFacebook />
                                    </a>
                                    <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">
                                    <FaInstagram />
                                    </a>
                                    <a href="#" aria-label="Github" className="text-gray-600 hover:text-black">
                                    <FaGithub />
                                    </a>
                                </div>
                            </div>
        
                            {/* Company Links */}
                            <div>
                                <h3 className="font-bold text-lg">COMPANY</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">About</a></li>
                                    <li><a href="#" className="hover:underline">Features</a></li>
                                    <li><a href="#" className="hover:underline">Works</a></li>
                                    <li><a href="#" className="hover:underline">Career</a></li>
                                </ul>
                            </div>
        
                            {/* Help Links */}
                            <div>
                                <h3 className="font-bold text-lg">HELP</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">Customer Support</a></li>
                                    <li><a href="#" className="hover:underline">Delivery Details</a></li>
                                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                </ul>
                            </div>
        
                            {/* FAQ and Resources */}
                            <div>
                                <h3 className="font-bold text-lg">RESOURCES</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">Free eBooks</a></li>
                                    <li><a href="#" className="hover:underline">Development Tutorials</a></li>
                                    <li><a href="#" className="hover:underline">YouTube Playlist</a></li>
                                    <li><a href="#" className="hover:underline">How-to Blog</a></li>
                                </ul>
                            </div>
                        </div>
        
                        {/* Footer Bottom */}
                        <div className=" py-4 border-t-2 border-gray-200">
                            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                                <p className="text-gray-600 text-sm">
                                    Shop.co © {new Date().getFullYear()} All Rights Reserved
                                </p>
                                <div className="flex space-x-4 mt-4 md:mt-0">
                                    <img src="/footer/visa.png" alt="Visa" className="h-10" />
                                    <img src="/footer/mastercard.png" alt="Mastercard" className="h-10" />
                                    <img src="/footer/paypal.png" alt="PayPal" className="h-10" />
                                    <img src="/footer/applepay.png" alt="Apple Pay" className="h-10" />
                                    <img src="/footer/googlepay.png" alt="Google Pay" className="h-10" />
                                </div>
                            </div>
                        </div>
                    </footer></>
            );
        }
        