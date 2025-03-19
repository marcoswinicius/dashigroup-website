import React from 'react';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center px-7 py-3.5 border border-transparent text-2xl font-medium rounded-md text-white bg-primary-orange hover:bg-primary-orange/90 transition-colors duration-200"
    >
      Contact Us
    </Link>
  );
};

export default ContactButton; 