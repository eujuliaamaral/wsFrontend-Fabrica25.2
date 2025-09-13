'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { traduzirTipo, traduzirEstatistica, traduzirHabilidade } from '../../utils/traducoes';
import { useCustomPokemons } from '../../hooks/useCustomPokemons';

export default function DetalhesPokemon({ id }) {
  const { buscarPokemonPorId, loading } = useCustomPokemons();
  const pokemon = buscarPokemonPorId(id);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Carregando...</div>
        </div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Voltar para a Pokédex
          </Link>
        </div>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">❌</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Pokémon não encontrado
          </h3>
          <p className="text-gray-600">
            O Pokémon customizado que você está procurando não existe mais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Voltar para a Pokédex
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                src={pokemon.sprites.front_default}
                alt={`Imagem do Pokemon ${pokemon.name}`}
                width={200}
                height={200}
                className="bg-white rounded-full p-4 shadow-lg"
              />
            </div>
            
            <div className="text-center md:text-left text-white">
              <h1 className="text-4xl font-bold capitalize mb-2">
                {pokemon.name}
              </h1>
              <p className="text-xl opacity-90 mb-4">
                ID: #{pokemon.id.toString().padStart(3, '0')}
              </p>
              
              {pokemon.custom && (
                <div className="mb-4">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                    ✨ Pokémon Customizado
                  </span>
                </div>
              )}
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      type.type.name === 'fire' ? 'bg-red-500' :
                      type.type.name === 'water' ? 'bg-blue-500' :
                      type.type.name === 'grass' ? 'bg-green-500' :
                      type.type.name === 'electric' ? 'bg-yellow-500' :
                      type.type.name === 'psychic' ? 'bg-purple-500' :
                      type.type.name === 'ice' ? 'bg-cyan-500' :
                      type.type.name === 'dragon' ? 'bg-indigo-500' :
                      type.type.name === 'dark' ? 'bg-gray-800' :
                      type.type.name === 'fairy' ? 'bg-pink-500' :
                      type.type.name === 'fighting' ? 'bg-orange-500' :
                      type.type.name === 'poison' ? 'bg-violet-500' :
                      type.type.name === 'ground' ? 'bg-amber-500' :
                      type.type.name === 'flying' ? 'bg-sky-500' :
                      type.type.name === 'bug' ? 'bg-lime-500' :
                      type.type.name === 'rock' ? 'bg-stone-500' :
                      type.type.name === 'ghost' ? 'bg-slate-500' :
                      type.type.name === 'steel' ? 'bg-zinc-500' :
                      'bg-gray-500'
                    }`}
                  >
                    {traduzirTipo(type.type.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações Básicas</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Altura:</span>
                  <span className="text-gray-900">{(pokemon.height / 10).toFixed(1)} m</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Peso:</span>
                  <span className="text-gray-900">{(pokemon.weight / 10).toFixed(1)} kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Experiência Base:</span>
                  <span className="text-gray-900">{pokemon.base_experience}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Ordem:</span>
                  <span className="text-gray-900">{pokemon.order}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Habilidades</h2>
              <div className="space-y-2">
                {pokemon.abilities.map((habilidade) => (
                  <div 
                    key={habilidade.ability.name}
                    className="bg-gray-100 rounded-lg px-4 py-2"
                  >
                    <span className="capitalize font-medium text-gray-900">
                      {traduzirHabilidade(habilidade.ability.name)}
                    </span>
                    {habilidade.is_hidden && (
                      <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                        Oculto
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Estatísticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">
                      {traduzirEstatistica(stat.stat.name)}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {stat.base_stat}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((stat.base_stat / 150) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pokemon.descricao && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{pokemon.descricao}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
