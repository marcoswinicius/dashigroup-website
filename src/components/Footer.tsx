
import Link from 'next/link';
import WhiteLogo from "../../public/images/foot-logo.png"
import Image from 'next/image';
import InstaIcon from "../../public/social-icons/instagram-icon.svg"
import FaceIcon from "../../public/social-icons/facebook-icon.svg"
import LinkedinIcon from "../../public/social-icons/linkedin-icon.svg"
import XIcon from "../../public/social-icons/x-icon.svg"


export default function Footer() {
    return (
        <footer className="bg-dark-grey text-white py-12 border-t border-white/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Office Column */}
                    <div className="order-1 sm:order-1 lg:order-1">
                        <h3 className="font-bold text-lg mb-4">Office</h3>
                        <p className="text-sm">
                            85 TOTTENHAM COURT ROAD,<br />
                            LONDON, WIT 4TQ
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="order-2 sm:order-2 lg:order-2">
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <p className="text-sm">
                            Email: <a href="mailto:info@dashigroup.co.uk" className="hover:text-primary-orange">info@dashigroup.co.uk</a><br />
                            Phone: <a href="tel:+447814729231" className="hover:text-primary-orange">+44 (0) 7814729231</a>
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="order-3 sm:order-3 lg:order-3">
                        <h3 className="font-bold text-lg mb-4">Link</h3>
                        <ul className="flex flex-wrap gap-4">
                            <li><Link href="/" className="text-sm hover:text-primary-orange cursor-pointer">Home</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-primary-orange cursor-pointer">About Us</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-primary-orange cursor-pointer">Service</Link></li>
                            <li><Link href="/projects" className="text-sm hover:text-primary-orange cursor-pointer">Project</Link></li>
                        </ul>
                    </div>
                    
                    {/* Company Info Column (Logo moved to right) */}
                    <div className="order-4 sm:order-4 lg:order-4">
                        <div className="flex items-center justify-start lg:justify-end mb-4">
                            <Image
                            src={WhiteLogo}
                            alt='White logo'
                            width={180}
                            />
                        </div>
                        <div className="flex space-x-3 justify-start lg:justify-end">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                                <Image
                                src={InstaIcon}
                                alt='Instagram'
                                width={14}
                                height={14}
                                />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                                <Image
                                src={FaceIcon}
                                alt='Facebook'
                                width={14}
                                height={14}
                                />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                                <Image
                                src={LinkedinIcon}
                                alt='LinkedIn'
                                width={14}
                                height={14}
                                />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                                <Image
                                src={XIcon}
                                alt='X (Twitter)'
                                width={14}
                                height={14}
                                />
                            </a>
                        </div>
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
