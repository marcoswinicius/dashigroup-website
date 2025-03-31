
import Link from 'next/link';
import WhiteLogo from "../../public/white-logo.svg"
import Image from 'next/image';
import InstaIcon from "../../public/social-icons/instagram-icon.svg"
import FaceIcon from "../../public/social-icons/facebook-icon.svg"
import LinkedinIcon from "../../public/social-icons/linkedin-icon.svg"
import { ChevronRight } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="bg-dark-grey text-white py-12">
            <div className="container mx-auto px-4">
                {/* Newsletter Section */}
                <div className="flex justify-end items-center mb-8">
                    <span className="text-sm uppercase mr-4">Subscribe to our newsletter:</span>
                    <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent text-gray-400 focus:outline-none text-sm"
                        />
                        
                        <ChevronRight className='cursor-pointer' />
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info Column */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                            src={WhiteLogo}
                            alt='White logo'
                            />
                        </div>
                        <h3 className="font-bold text-lg mb-4">About Us</h3>
                        <p className="text-sm mb-6">
                        At Dashi Group, we are committed to leveraging our expertise to proactively collaborate with our clients,
                         ensuring the successful delivery of high-profile construction projects.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-bg-white/10 rounded-full flex items-center justify-center">
                            <Image
                            src={InstaIcon}
                            alt='Insta Icon'
                            />
                            </div>
                            <div className="w-8 h-8 bg-bg-white/10 rounded-full flex items-center justify-center">
                            <Image
                            src={FaceIcon}
                            alt='Facebook Icon'
                            />
                            </div>
                            <div className="w-8 h-8 bg-bg-white/10 rounded-full flex items-center justify-center">
                            <Image
                            src={LinkedinIcon}
                            alt='Linkedin Icon'
                            />
                            </div>
                        </div>
                    </div>

                    {/* Office Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Office</h3>
                        <p className="text-sm">
                            85 TOTTENHAM COURT ROAD,<br />
                            LONDON, WIT 4TQ
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <p className="text-sm">
                            Email: info@dashigroup.co.uk<br />
                            Phone: +44 (0) 7814729231
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Link</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm hover:text-primary-orange cursor-pointer">Home</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-primary-orange cursor-pointer">About Us</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-primary-orange cursor-pointer">Service</Link></li>
                            <li><Link href="/projects" className="text-sm hover:text-primary-orange cursor-pointer">Project</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm border-t border-gray-800 pt-8">
                    COPYRIGHT © 2025 DASHI GROUP - ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}