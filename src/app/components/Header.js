'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/30 via-purple-400/30 to-pink-400/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">P</span>
              </div>
              <span className="text-white text-xl font-bold">Pokédex</span>
            </Link>
          </div>
          
          <div className="ml-10 flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Início
              </Link>
              <Link 
                href="/favoritos" 
                className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Favoritos
              </Link>
            </div>
            
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-yellow-300 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700 rounded-lg mb-4">
              <Link
                href="/"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/favoritos"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Favoritos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
