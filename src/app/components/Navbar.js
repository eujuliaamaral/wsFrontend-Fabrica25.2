'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useFavorites } from '../context/FavoritesContext';

export default function Navbar({ termoDeBusca, setTermoDeBusca, onCriarPokemon }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  return (
    <header className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/30 via-purple-400/30 to-pink-400/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold text-xl">P</span>
              </div>
              <span className="text-white text-2xl font-bold">Pokédex</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Pesquisar Pokémon..." 
                value={termoDeBusca}
                onChange={(e) => setTermoDeBusca(e.target.value)}
                className="w-full px-6 py-3 pl-12 pr-6 text-gray-700 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 shadow-lg transition-all duration-300 placeholder-gray-500"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              </div>
              {termoDeBusca && (
                <button
                  onClick={() => setTermoDeBusca('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onCriarPokemon}
              className="flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300 font-medium shadow-lg hover:scale-105 transform"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Criar Pokémon
            </button>
            
            <Link 
              href="/favoritos" 
              className="flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300 font-medium shadow-lg hover:scale-105 transform relative"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Favoritos
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
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

        <div className="md:hidden mb-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pesquisar Pokémon..." 
              value={termoDeBusca}
              onChange={(e) => setTermoDeBusca(e.target.value)}
              className="w-full px-6 py-3 pl-12 pr-6 text-gray-700 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 shadow-lg transition-all duration-300 placeholder-gray-500"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            </div>
            {termoDeBusca && (
              <button
                onClick={() => setTermoDeBusca('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <button
                onClick={() => {
                  onCriarPokemon();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-white hover:bg-white/20 rounded-xl text-base font-medium transition-colors"
              >
                <PlusIcon className="h-5 w-5 mr-3" />
                Criar Pokémon
              </button>
              <Link
                href="/favoritos"
                className="flex items-center w-full px-4 py-3 text-white hover:bg-white/20 rounded-xl text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Favoritos
                {favorites.length > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
