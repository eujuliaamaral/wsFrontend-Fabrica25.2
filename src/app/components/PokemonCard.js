'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useFavorites } from '../context/FavoritesContext';
import { traduzirTipo } from '../utils/traducoes';

export default function PokemonCard({ pokemon, layout = 'grid', onEdit, onDelete }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const isCustomPokemon = pokemon.custom || pokemon.id > 10000;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(pokemon);
  };

  if (layout === 'lista') {
    return (
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
        <Link href={`/pokemon/${pokemon.id}`} className="flex items-center flex-1">
          <div className="relative">
            <Image
              src={pokemon.sprites.front_default}
              alt={`Imagem do Pokemon ${pokemon.name}`}
              width={80}
              height={80}
              className="object-contain"
            />
            <button
              onClick={handleFavoriteClick}
              className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              {isFavorite(pokemon.id) ? (
                <HeartIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartOutlineIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
              )}
            </button>
          </div>
          
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-bold text-gray-900 capitalize">
              {pokemon.name}
            </h3>
            <p className="text-sm text-gray-600">ID: #{pokemon.id.toString().padStart(3, '0')}</p>
            {/* Peso em kg */}
            <p className="text-sm text-gray-600">Peso: {pokemon.weight} kg</p>
            {isCustomPokemon && (
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mt-1">
                ✨ Customizado
              </span>
            )}
            <div className="flex flex-wrap gap-1 mt-2">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    type.type.name === 'fire' ? 'bg-red-100 text-red-800' :
                    type.type.name === 'water' ? 'bg-blue-100 text-blue-800' :
                    type.type.name === 'grass' ? 'bg-green-100 text-green-800' :
                    type.type.name === 'electric' ? 'bg-yellow-100 text-yellow-800' :
                    type.type.name === 'psychic' ? 'bg-purple-100 text-purple-800' :
                    type.type.name === 'ice' ? 'bg-cyan-100 text-cyan-800' :
                    type.type.name === 'dragon' ? 'bg-indigo-100 text-indigo-800' :
                    type.type.name === 'dark' ? 'bg-gray-100 text-gray-800' :
                    type.type.name === 'fairy' ? 'bg-pink-100 text-pink-800' :
                    type.type.name === 'fighting' ? 'bg-orange-100 text-orange-800' :
                    type.type.name === 'poison' ? 'bg-violet-100 text-violet-800' :
                    type.type.name === 'ground' ? 'bg-amber-100 text-amber-800' :
                    type.type.name === 'flying' ? 'bg-sky-100 text-sky-800' :
                    type.type.name === 'bug' ? 'bg-lime-100 text-lime-800' :
                    type.type.name === 'rock' ? 'bg-stone-100 text-stone-800' :
                    type.type.name === 'ghost' ? 'bg-slate-100 text-slate-800' :
                    type.type.name === 'steel' ? 'bg-zinc-100 text-zinc-800' :
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {traduzirTipo(type.type.name)}
                </span>
              ))}
            </div>
          </div>
        </Link>
        
        {isCustomPokemon && (
          <div className="flex space-x-2 ml-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onEdit?.(pokemon);
              }}
              className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
              title="Editar Pokémon"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (confirm(`Tem certeza que deseja excluir ${pokemon.name}?`)) {
                  onDelete?.(pokemon.id);
                }
              }}
              className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
              title="Excluir Pokémon"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 p-4 relative">
      <Link href={`/pokemon/${pokemon.id}`} className="block">
        <div className="relative">
          <div className="flex justify-center mb-2">
            <Image
              src={pokemon.sprites.front_default}
              alt={`Imagem do Pokemon ${pokemon.name}`}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            {isFavorite(pokemon.id) ? (
              <HeartIcon className="h-5 w-5 text-red-500" />
            ) : (
              <HeartOutlineIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 capitalize mb-1">
            {pokemon.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            ID: #{pokemon.id.toString().padStart(3, '0')}
          </p>
          {/* Peso em kg */}
          <p className="text-sm text-gray-600 mb-2">
            Peso: {pokemon.weight} kg
          </p>
          {isCustomPokemon && (
            <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-2">
              ✨ Customizado
            </span>
          )}
          <div className="flex flex-wrap justify-center gap-1">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  type.type.name === 'fire' ? 'bg-red-100 text-red-800' :
                  type.type.name === 'water' ? 'bg-blue-100 text-blue-800' :
                  type.type.name === 'grass' ? 'bg-green-100 text-green-800' :
                  type.type.name === 'electric' ? 'bg-yellow-100 text-yellow-800' :
                  type.type.name === 'psychic' ? 'bg-purple-100 text-purple-800' :
                  type.type.name === 'ice' ? 'bg-cyan-100 text-cyan-800' :
                  type.type.name === 'dragon' ? 'bg-indigo-100 text-indigo-800' :
                  type.type.name === 'dark' ? 'bg-gray-100 text-gray-800' :
                  type.type.name === 'fairy' ? 'bg-pink-100 text-pink-800' :
                  type.type.name === 'fighting' ? 'bg-orange-100 text-orange-800' :
                  type.type.name === 'poison' ? 'bg-violet-100 text-violet-800' :
                  type.type.name === 'ground' ? 'bg-amber-100 text-amber-800' :
                  type.type.name === 'flying' ? 'bg-sky-100 text-sky-800' :
                  type.type.name === 'bug' ? 'bg-lime-100 text-lime-800' :
                  type.type.name === 'rock' ? 'bg-stone-100 text-stone-800' :
                  type.type.name === 'ghost' ? 'bg-slate-100 text-slate-800' :
                  type.type.name === 'steel' ? 'bg-zinc-100 text-zinc-800' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {traduzirTipo(type.type.name)}
              </span>
            ))}
          </div>
        </div>
      </Link>
      
      {isCustomPokemon && (
        <div className="absolute bottom-2 right-2 flex space-x-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit?.(pokemon);
            }}
            className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
            title="Editar Pokémon"
          >
            <PencilIcon className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (confirm(`Tem certeza que deseja excluir ${pokemon.name}?`)) {
                onDelete?.(pokemon.id);
              }
            }}
            className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
            title="Excluir Pokémon"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}