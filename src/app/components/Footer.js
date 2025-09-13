export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pokédex</h3>
            <p className="text-gray-300 text-sm">
              Explore o mundo dos Pokémon com nossa Pokédex interativa. 
              Descubra informações detalhadas sobre seus Pokémon favoritos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://pokeapi.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  PokeAPI
                </a>
              </li>
              <li>
                <a 
                  href="https://www.pokemon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Site Oficial Pokémon
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Desenvolvido com</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-2 py-1 rounded text-xs">Next.js</span>
              <span className="bg-cyan-500 px-2 py-1 rounded text-xs">Tailwind CSS</span>
              <span className="bg-green-600 px-2 py-1 rounded text-xs">React</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Pokédex. Todos os direitos reservados.</p>
          <p className="mt-2">
            Dados fornecidos pela <a href="https://pokeapi.co" className="text-yellow-300 hover:underline">PokeAPI</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
