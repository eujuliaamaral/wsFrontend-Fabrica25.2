'use client';

import Link from 'next/link';
import { useFavorites } from '../context/FavoritesContext';
import PokemonCard from '../components/PokemonCard';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PaginaFavoritos() {
  const { favorites } = useFavorites();
  
  // Garantir que favorites seja sempre um array
  const favoritesList = favorites || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Botão voltar - só aparece quando há favoritos */}
      {favoritesList.length > 0 && (
        <div className="mb-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar para Pokédex
          </Link>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-white">
            Meus Favoritos
          </h1>
        </div>
        <p className="text-lg text-white">
          {favoritesList.length === 0 
            ? "Você ainda não tem Pokémons favoritos" 
            : `${favoritesList.length} Pokémon${favoritesList.length !== 1 ? 's' : ''} favoritado${favoritesList.length !== 1 ? 's' : ''}`
          }
        </p>
      </div>

      {favoritesList.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">:(</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Nenhum Pokémon favoritado
          </h3>
          <p className="text-white mb-6">
            Explore a Pokédex e adicione seus Pokémons favoritos clicando no coração
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explorar Pokédex
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoritesList.map((pokemon) => (
            <PokemonCard 
              key={pokemon.id} 
              pokemon={pokemon} 
              layout="grid"
              onEdit={() => {}} // Função vazia para evitar erros
              onDelete={() => {}} // Função vazia para evitar erros
            />
          ))}
        </div>
      )}
    </div>
  );
}
