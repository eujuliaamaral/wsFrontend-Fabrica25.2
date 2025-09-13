'use client';

import { useState, useEffect, useCallback } from 'react';

export function useCustomPokemons() {
  const [pokemonsCustomizados, setPokemonsCustomizados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedPokemons = JSON.parse(localStorage.getItem('pokemons-customizados') || '[]');
        setPokemonsCustomizados(storedPokemons);
      } catch (error) {
        console.error('Erro ao carregar Pokémons customizados do localStorage:', error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const adicionarPokemon = useCallback((novoPokemon) => {
    setPokemonsCustomizados(prev => {
      const updatedPokemons = [...prev, novoPokemon];
      if (typeof window !== 'undefined') {
        localStorage.setItem('pokemons-customizados', JSON.stringify(updatedPokemons));
      }
      return updatedPokemons;
    });
  }, []);

  const excluirPokemon = useCallback((id) => {
    setPokemonsCustomizados(prev => {
      const updatedPokemons = prev.filter(p => p.id.toString() !== id.toString());
      if (typeof window !== 'undefined') {
        localStorage.setItem('pokemons-customizados', JSON.stringify(updatedPokemons));
      }
      return updatedPokemons;
    });
  }, []);

  const editarPokemon = useCallback((id, dadosAtualizados) => {
    setPokemonsCustomizados(prev => {
      const updatedPokemons = prev.map(p => 
        p.id.toString() === id.toString() 
          ? { ...p, ...dadosAtualizados }
          : p
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('pokemons-customizados', JSON.stringify(updatedPokemons));
      }
      return updatedPokemons;
    });
  }, []);

  const buscarPokemonPorId = useCallback((id) => {
    return pokemonsCustomizados.find(p => p.id.toString() === id.toString());
  }, [pokemonsCustomizados]);

  return {
    pokemonsCustomizados,
    adicionarPokemon,
    excluirPokemon,
    editarPokemon,
    buscarPokemonPorId,
    loading,
  };
}