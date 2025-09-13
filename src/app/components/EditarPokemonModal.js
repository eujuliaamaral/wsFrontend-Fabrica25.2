'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function EditarPokemonModal({ isOpen, onClose, pokemon, onPokemonEditado }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'normal',
    height: '',
    weight: '',
    ability: '',
    imageUrl: '',
    description: ''
  });

  // Preencher o formulário quando o modal abrir
  useEffect(() => {
    if (pokemon && isOpen) {
      setFormData({
        name: pokemon.name || '',
        type: pokemon.types?.[0]?.type?.name || 'normal',
        height: pokemon.height ? (pokemon.height / 10).toString() : '',
        weight: pokemon.weight ? (pokemon.weight / 10).toString() : '',
        ability: pokemon.abilities?.[0]?.ability?.name || '',
        imageUrl: pokemon.sprites?.front_default || '',
        description: pokemon.descricao || ''
      });
    }
  }, [pokemon, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Por favor, insira um nome para o Pokémon');
      return;
    }

    const pokemonAtualizado = {
      ...pokemon,
      name: formData.name.trim(),
      types: [{ type: { name: formData.type } }],
      height: parseFloat(formData.height) * 10,
      weight: parseFloat(formData.weight) * 10,
      abilities: [{ ability: { name: formData.ability } }],
      sprites: {
        front_default: formData.imageUrl || '/placeholder-pokemon.png'
      },
      descricao: formData.description,
      base_experience: pokemon.base_experience || 100,
      order: pokemon.order || 0,
      custom: true
    };

    onPokemonEditado(pokemonAtualizado);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!pokemon) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-md space-y-4 bg-white rounded-2xl shadow-xl p-6 w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-gray-900">
              Editar Pokémon
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Pokémon *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Ex: Pikachu"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              >
                <option value="normal">Normal</option>
                <option value="fire">Fogo</option>
                <option value="water">Água</option>
                <option value="grass">Planta</option>
                <option value="electric">Elétrico</option>
                <option value="ice">Gelo</option>
                <option value="fighting">Lutador</option>
                <option value="poison">Venenoso</option>
                <option value="ground">Terra</option>
                <option value="flying">Voador</option>
                <option value="psychic">Psíquico</option>
                <option value="bug">Inseto</option>
                <option value="rock">Pedra</option>
                <option value="ghost">Fantasma</option>
                <option value="dragon">Dragão</option>
                <option value="dark">Sombrio</option>
                <option value="steel">Aço</option>
                <option value="fairy">Fada</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Altura (m)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="0.4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="6.0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Habilidade
              </label>
              <input
                type="text"
                name="ability"
                value={formData.ability}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Ex: Static"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL da Imagem
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="https://exemplo.com/imagem.png"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Descreva seu Pokémon..."
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
