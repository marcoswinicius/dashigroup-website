
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                {/* Newsletter Section */}
                <div className="flex justify-end items-center mb-8">
                    <span className="text-sm uppercase mr-4">Subscribe to our newsletter:</span>
                    <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent text-gray-400 focus:outline-none text-sm"
                        />
                        
                        Arrow
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info Column */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
                            <span className="font-bold text-xl">DASHI</span>
                        </div>
                        <h3 className="font-bold text-lg mb-4">About Us</h3>
                        <p className="text-sm mb-6">
                            WE HAVE THE CONFIDENCE TO PROVIDE THE BEST SERVICE FOR YOU, WITH THE SUPPORT OF PROFESSIONAL AND CERTIFIED HR THAT WE CURRENTLY HAVE AND THE HIGH-QUALITY MATERIALS WE USE AND STRUCTURED WORK TECHNIQUES, WE WILL BE ABLE TO REALIZE TIMELY COMPLETION OF WORK.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                asd
                            </div>
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                asd
                            </div>
                            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                icon
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
                            Email: contact@jhntracktor.co<br />
                            Phone: (+62) 877-2469-7246
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Link</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm hover:text-gray-400">Home</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-gray-400">About Us</Link></li>
                            <li><Link href="/service" className="text-sm hover:text-gray-400">Service</Link></li>
                            <li><Link href="/project" className="text-sm hover:text-gray-400">Project</Link></li>
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