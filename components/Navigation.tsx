'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            KSA M Day Logistics
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="/fleet" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Fleet
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Services
              </Link>
              <Link href="/fleet" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Fleet
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-center">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
