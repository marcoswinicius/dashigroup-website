import { Check } from 'lucide-react';
import { ContactForm } from './ContactForm';
import Image from 'next/image';

export default function Contact() {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background Image with Gradient */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/scaffolding.png"
                    alt="Scaffolding"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Title */}
                <h1 className="text-[64px] text-white font-bold text-center mb-16">
                    Leading Way In Building & Civil Construction
                </h1>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
                    {[
                        'Professional Staff',
                        '100% Satisfaction',
                        'Accurate Testing',
                        'Transparent Pricing'
                    ].map((text, index) => (
                        <div key={index} className="flex items-center gap-2 text-white">
                            <div className="bg-primary-orange p-2 rounded-full">
                                <Check className="w-6 h-6" />
                            </div>
                            <span className="font-medium">{text}</span>
                        </div>
                    ))}
                </div>

                {/* Contact Blocks */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Form Block */}
                    <div className="bg-primary-orange rounded-[15px] p-6 md:p-[54px] w-full lg:w-[963px]">
                        <h3 className="text-2xl font-bold mb-4">Request A Quote</h3>
                        <p className="mb-8">
                            Complete control over products allow us to our customers the best quality
                            prices and services. We take great pride in everything that we do in Dashi Group
                        </p>
                        <ContactForm />
                    </div>

                    {/* Info Block */}
                    <div className="bg-primary-orange rounded-[15px] p-6 md:p-[54px] w-full lg:w-[499px]">
                        <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                        
                        <h4 className="text-xl font-bold mb-2">Our Location</h4>
                        <p className="mb-6">Address: 85 Tottenham Court Road, London W1T 4TQ</p>
                        
                        <h4 className="text-xl font-bold mb-2">Quick Contact</h4>
                        <p className="mb-6">
                            Tel: +44 (0) 7814729231 and +44 (0) 2035766134<br />
                            Email: info@dashigroup.co.uk
                        </p>
                        
                        <h4 className="text-xl font-bold mb-2">Opening Hours</h4>
                        <p className="mb-8">
                            Monday - Friday<br />
                            09:00 AM - 06:00 PM
                        </p>
                        
                        <p className="mb-6">Do You Have Any Question, Just Contact Us To Get Help!</p>
                        
                        <button className="bg-dark-grey text-white px-8 py-3 rounded-md w-full">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}