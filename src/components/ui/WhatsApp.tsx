'use client';

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import Link from "next/link";

export default function WhatsApp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const phone = "55SEUNUMEROAQUI"; // Phone
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  const shouldPulse = !open && !isHovered;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Mini-chat */}
      {open && (
        <div className="bg-white p-4 rounded-xl shadow-lg w-64">
          <p className="text-sm font-medium mb-2 text-gray-800">Enter your message:</p>
          <textarea
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
            placeholder="Hello! I'm interested in..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Link
            href={whatsappLink}
            target="_blank"
            className="mt-3 inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-md w-full text-center hover:bg-green-600/90 transition"
            onClick={() => {
              setOpen(false);
              setMessage("");
            }}
          >
            Send via WhatsApp
          </Link>
        </div>
      )}

      {/* Pulse Cicle */}
      <div className="relative">
        {shouldPulse && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75 animate-ping"></span>
        )}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setOpen(!open)}
          className="relative z-10 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-600/90 transform transition-transform duration-200 ease-in-out hover:scale-110"
        >
          <WhatsAppIcon />
        </button>
      </div>
    </div>
  );
}
