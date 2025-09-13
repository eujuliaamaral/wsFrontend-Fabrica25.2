'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

async function fetchPokemons(offset = 0, limit = 50) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Falha ao buscar Pokémons');
  }
  return response.json();
}

async function fetchPokemonDetails(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Falha ao buscar detalhes do Pokémon');
  }
  return response.json();
}

export function usePokemons(offset = 0, limit = 50) {
  return useQuery({
    queryKey: ['pokemons', offset, limit],
    queryFn: () => fetchPokemons(offset, limit),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function usePokemonDetails(url) {
  return useQuery({
    queryKey: ['pokemon-details', url],
    queryFn: () => fetchPokemonDetails(url),
    enabled: !!url,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
}

export function usePokemonsWithDetails(offset = 0, limit = 50) {
  const { data: pokemonsData, isLoading, error } = usePokemons(offset, limit);
  
  const [pokemonsWithDetails, setPokemonsWithDetails] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);
  
  useEffect(() => {
    const pokemonUrls = pokemonsData?.results?.map(pokemon => pokemon.url) || [];
    
    if (pokemonUrls.length > 0) {
      setDetailsLoading(true);
      setDetailsError(null);
      
      Promise.all(pokemonUrls.map(url => fetchPokemonDetails(url)))
        .then(details => {
          setPokemonsWithDetails(details);
          setDetailsLoading(false);
        })
        .catch(err => {
          setDetailsError(err);
          setDetailsLoading(false);
        });
    }
  }, [pokemonsData]);
  
  return {
    pokemons: pokemonsWithDetails,
    isLoading: isLoading || detailsLoading,
    error: error || detailsError,
    totalCount: pokemonsData?.count || 0,
  };
}
