'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFavorites } from '../context/FavoritesContext';

export default function CriarPokemonModal({ isOpen, onClose, onPokemonCriado }) {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: 'normal',
    altura: '',
    peso: '',
    descricao: '',
    habilidade: '',
    imagem: ''
  });
  const [carregando, setCarregando] = useState(false);

  const tiposPokemon = [
    'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 
    'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 
    'dragon', 'dark', 'steel', 'fairy'
  ];

  const traduzirTipo = (tipo) => {
    const tipos = {
      normal: 'Normal', fire: 'Fogo', water: 'Água', grass: 'Planta',
      electric: 'Elétrico', ice: 'Gelo', fighting: 'Lutador', poison: 'Venenoso',
      ground: 'Terra', flying: 'Voador', psychic: 'Psíquico', bug: 'Inseto',
      rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio',
      steel: 'Aço', fairy: 'Fada'
    };
    return tipos[tipo] || tipo;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      // Gerar ID único baseado no timestamp
      const novoId = Date.now();
      
      // Criar objeto do Pokémon
      const novoPokemon = {
        id: novoId,
        name: formData.nome.toLowerCase(),
        height: parseInt(formData.altura) || 0,
        weight: parseInt(formData.peso) || 0,
        base_experience: Math.floor(Math.random() * 200) + 50,
        order: novoId,
        types: [{ type: { name: formData.tipo } }],
        abilities: [{ 
          ability: { name: formData.habilidade || 'habilidade-custom' },
          is_hidden: false 
        }],
        stats: [
          { stat: { name: 'hp' }, base_stat: Math.floor(Math.random() * 100) + 50 },
          { stat: { name: 'attack' }, base_stat: Math.floor(Math.random() * 100) + 50 },
          { stat: { name: 'defense' }, base_stat: Math.floor(Math.random() * 100) + 50 },
          { stat: { name: 'special-attack' }, base_stat: Math.floor(Math.random() * 100) + 50 },
          { stat: { name: 'special-defense' }, base_stat: Math.floor(Math.random() * 100) + 50 },
          { stat: { name: 'speed' }, base_stat: Math.floor(Math.random() * 100) + 50 }
        ],
        sprites: {
          front_default: formData.imagem || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`
        },
        custom: true,
        descricao: formData.descricao
      };

      // Salvar no localStorage
      const pokemonsCustomizados = JSON.parse(localStorage.getItem('pokemons-customizados') || '[]');
      pokemonsCustomizados.push(novoPokemon);
      localStorage.setItem('pokemons-customizados', JSON.stringify(pokemonsCustomizados));

      // Notificar o componente pai
      onPokemonCriado(novoPokemon);

      // Limpar formulário
      setFormData({
        nome: '',
        tipo: 'normal',
        altura: '',
        peso: '',
        descricao: '',
        habilidade: '',
        imagem: ''
      });

      onClose();
    } catch (error) {
      console.error('Erro ao criar Pokémon:', error);
    } finally {
      setCarregando(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Criar Novo Pokémon</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Pokémon *
              </label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Ex: Pikachu"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo *
              </label>
              <select
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              >
                {tiposPokemon.map(tipo => (
                  <option key={tipo} value={tipo}>
                    {traduzirTipo(tipo)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Altura (cm)
              </label>
              <input
                type="number"
                value={formData.altura}
                onChange={(e) => setFormData({...formData, altura: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Ex: 40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Peso (g)
              </label>
              <input
                type="number"
                value={formData.peso}
                onChange={(e) => setFormData({...formData, peso: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Ex: 600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Habilidade
              </label>
              <input
                type="text"
                value={formData.habilidade}
                onChange={(e) => setFormData({...formData, habilidade: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Ex: Choque do Trovão"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL da Imagem
              </label>
              <input
                type="url"
                value={formData.imagem}
                onChange={(e) => setFormData({...formData, imagem: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="https://exemplo.com/imagem.png"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              placeholder="Descreva seu Pokémon..."
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={carregando}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {carregando ? 'Criando...' : 'Criar Pokémon'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
