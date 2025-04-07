import { Check, Clock, ContactIcon, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className="relative z-10 container mx-auto px-4 md:px-14 py-20">
                {/* Title */}
                <h1 className="text-white text-5xl lg:text-6xl font-bold text-center mb-16">
                Contact Us Today
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
                            prices and services. <br />We take great pride in everything that we do in Dashi Group
                        </p>
                        <ContactForm />
                    </div>

                    {/* Info Block */}
                    <div className="bg-primary-orange rounded-[15px] p-6 md:p-[54px] w-full lg:w-[499px]">

                        <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                        <div className='flex gap-2 items-center'>
                            <h4 className="text-xl font-bold">Our Location</h4>
                            <MapPin width={20} />
                        </div>
                        <p className="mb-6">Address: 85 Tottenham Court Road,<br /> London W1T 4TQ</p>

                        <div className='flex gap-2 items-center'>
                            <h4 className="text-xl font-bold ">Quick Contact</h4>
                            <ContactIcon width={20} />
                        </div>

                        <p className="mb-6">
                            <b>Tel:</b>{' '}
                            <Link href="tel:+447814729231">+44 (0) 7814729231</Link> and<br />
                            <Link href="tel:+442035766134">+44 (0) 2035766134</Link> <br />

                            <b>Email:</b>{' '}
                            <Link href="mailto:info@dashigroup.co.uk">info@dashigroup.co.uk</Link>
                        </p>

                        <div className='flex gap-2 items-center'>
                            <h4 className="text-xl font-bold">Opening Hours</h4>
                            <Clock width={20} />
                        </div>
                        <p className="mb-8">
                            Monday - Friday<br />
                            08:00 AM - 06:00 PM
                        </p>

                        <p className="mb-6">Do You Have Any Question, <br />Just Contact Us To Get Help!</p>
                        <Link href="/contact" className="bg-dark-grey hover:bg-dark-grey/90 text-white px-8 py-3 rounded-md w-full">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}