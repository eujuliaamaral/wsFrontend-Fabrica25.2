'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('pokemon-favorites');
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos do localStorage:', error);
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('pokemon-favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Erro ao salvar favoritos no localStorage:', error);
    }
  }, [favorites]);

  const addToFavorites = (pokemon) => {
    setFavorites(prev => {
      if (prev.find(p => p.id === pokemon.id)) {
        return prev;
      }
      return [...prev, pokemon];
    });
  };

  const removeFromFavorites = (pokemonId) => {
    setFavorites(prev => prev.filter(p => p.id !== pokemonId));
  };

  const isFavorite = (pokemonId) => {
    return favorites.some(p => p.id === pokemonId);
  };

  const toggleFavorite = (pokemon) => {
    if (isFavorite(pokemon.id)) {
      removeFromFavorites(pokemon.id);
    } else {
      addToFavorites(pokemon);
    }
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}
