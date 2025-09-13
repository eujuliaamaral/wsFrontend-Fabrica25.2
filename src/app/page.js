'use client';

import { useState, useMemo } from 'react';
import PokemonCard from './components/PokemonCard';
import Navbar from './components/Navbar';
import CriarPokemonModal from './components/CriarPokemonModal';
import EditarPokemonModal from './components/EditarPokemonModal';
import { Squares2X2Icon, ListBulletIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePokemonsWithDetails } from './hooks/usePokemons';
import { useCustomPokemons } from './hooks/useCustomPokemons';

export default function PaginaInicial() {
  const [termoDeBusca, setTermoDeBusca] = useState('');
  const [visualizacao, setVisualizacao] = useState('grade');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [modalCriarAberto, setModalCriarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [pokemonParaEditar, setPokemonParaEditar] = useState(null);
  
  const POKEMONS_POR_PAGINA = 50;
  const deslocamento = (paginaAtual - 1) * POKEMONS_POR_PAGINA;
  
  const { pokemons: pokemonsAPI, isLoading, error, totalCount } = usePokemonsWithDetails(deslocamento, POKEMONS_POR_PAGINA);
  
  const { pokemonsCustomizados, adicionarPokemon, excluirPokemon, editarPokemon } = useCustomPokemons();
  
  const todosPokemons = useMemo(() => {
    return [...pokemonsAPI, ...pokemonsCustomizados];
  }, [pokemonsAPI, pokemonsCustomizados]);

  const pokemonsFiltrados = useMemo(() => {
    if (termoDeBusca.trim() === '') {
      return todosPokemons;
    }
    return todosPokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(termoDeBusca.toLowerCase())
    );
  }, [termoDeBusca, todosPokemons]);

  const totalPaginas = Math.ceil(totalCount / POKEMONS_POR_PAGINA);
  const temProxima = paginaAtual < totalPaginas;
  const temAnterior = paginaAtual > 1;

  const irParaProximaPagina = () => {
    if (temProxima) {
      setPaginaAtual(paginaAnterior => paginaAnterior + 1);
      setTermoDeBusca('');
    }
  };

  const irParaPaginaAnterior = () => {
    if (temAnterior) {
      setPaginaAtual(paginaAnterior => paginaAnterior - 1);
      setTermoDeBusca('');
    }
  };

  const handleCriarPokemon = () => {
    setModalCriarAberto(true);
  };

  const handlePokemonCriado = (novoPokemon) => {
    adicionarPokemon(novoPokemon);
    setModalCriarAberto(false);
  };

  const handleEditarPokemon = (pokemon) => {
    setPokemonParaEditar(pokemon);
    setModalEditarAberto(true);
  };

  const handlePokemonEditado = (pokemonEditado) => {
    editarPokemon(pokemonEditado.id, pokemonEditado);
    setModalEditarAberto(false);
    setPokemonParaEditar(null);
  };

  const handleExcluirPokemon = (id) => {
    excluirPokemon(id);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
        <Navbar 
          termoDeBusca={termoDeBusca} 
          setTermoDeBusca={setTermoDeBusca} 
          onCriarPokemon={handleCriarPokemon}
        />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">❌</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Erro ao carregar Pokémons
            </h3>
            <p className="text-gray-600">
              Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <Navbar 
        termoDeBusca={termoDeBusca} 
        setTermoDeBusca={setTermoDeBusca} 
        onCriarPokemon={handleCriarPokemon}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Explorar Pokémons
          </h1>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/30">
            <div className="flex space-x-1">
              <button
                onClick={() => setVisualizacao('grade')}
                className={`flex items-center px-3 py-1.5 rounded-full transition-all duration-300 text-xs font-medium ${
                  visualizacao === 'grade'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                }`}
                title="Grade"
              >
                <Squares2X2Icon className="h-3 w-3 mr-1" />
                Grade
              </button>
              <button
                onClick={() => setVisualizacao('lista')}
                className={`flex items-center px-3 py-1.5 rounded-full transition-all duration-300 text-xs font-medium ${
                  visualizacao === 'lista'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                }`}
                title="Lista"
              >
                <ListBulletIcon className="h-3 w-3 mr-1" />
                Lista
              </button>
            </div>
          </div>
        </div>

        {termoDeBusca && (
          <div className="text-center mb-6">
            <p className="text-lg text-blue-600 font-medium">
              Procurando por &quot;{termoDeBusca}&quot;...
            </p>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Carregando Pokémons...</p>
            </div>
          </div>
        ) : pokemonsFiltrados.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum Pokémon encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar sua pesquisa ou limpar o filtro
            </p>
          </div>
        ) : (
          <section 
            className={
              visualizacao === 'lista' 
                ? 'space-y-4 max-w-4xl mx-auto' 
                : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'
            }
          >
                            {pokemonsFiltrados.map((pokemon) => (
                              <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                layout={visualizacao}
                                onEdit={handleEditarPokemon}
                                onDelete={handleExcluirPokemon}
                              />
                            ))}
          </section>
        )}

        {!termoDeBusca && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <button
                onClick={irParaPaginaAnterior}
                disabled={!temAnterior}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  temAnterior
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:scale-105 transform'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronLeftIcon className="h-5 w-5 mr-2" />
                Anterior
              </button>
              
              <div className="flex items-center space-x-2 bg-gray-100/50 rounded-xl px-4 py-2">
                <span className="text-sm font-medium text-gray-700">
                  Página {paginaAtual} de {totalPaginas}
                </span>
              </div>
              
              <button
                onClick={irParaProximaPagina}
                disabled={!temProxima}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  temProxima
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:scale-105 transform'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Próxima
                <ChevronRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        )}

        <CriarPokemonModal
          isOpen={modalCriarAberto}
          onClose={() => setModalCriarAberto(false)}
          onPokemonCriado={handlePokemonCriado}
        />

        <EditarPokemonModal
          isOpen={modalEditarAberto}
          onClose={() => {
            setModalEditarAberto(false);
            setPokemonParaEditar(null);
          }}
          pokemon={pokemonParaEditar}
          onPokemonEditado={handlePokemonEditado}
        />
      </div>
    </div>
  );
}