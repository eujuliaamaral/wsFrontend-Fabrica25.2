# 🎮 Pokédex Interativa

Uma aplicação web moderna e interativa para explorar o mundo dos Pokémon, desenvolvida com Next.js, React Query e Tailwind CSS.

## ✨ Funcionalidades

### 🎯 Requisitos Mínimos
- **Cabeçalho e Rodapé** - Interface completa com navegação
- **Lista de Pokémons** - Exibição com nome, ID e imagem
- **Barra de Pesquisa** - Busca em tempo real por nome
- **Hospedagem** - Deploy no Vercel

### 🚀 Requisitos Intermediários
- **Visualização Alternada** - Toggle entre grade e lista
- **Página de Detalhes** - Informações completas em `/pokemon/[id]`
- **Detalhes Incluídos** - Nome, ID, imagem, tipos, peso e experiência base

### ⚡ Requisitos Avançados
- **Responsividade** - Adaptável para mobile, tablet e desktop
- **Sistema de Favoritos** - Salvar Pokémons favoritos
- **Página de Favoritos** - Acessível em `/favoritos`

### 🎨 Diferenciais Implementados
- **Tailwind CSS** - Estilização moderna e responsiva
- **Biblioteca de Componentes** - Headless UI + Heroicons
- **React Query** - Cache inteligente e performance otimizada

### 🔥 Funcionalidades Extras
- **Pokémons Customizados** - Criar, editar e excluir Pokémons personalizados
- **Paginação** - 50 Pokémons por página
- **Traduções** - Tipos, habilidades e estatísticas em português
- **Design Moderno** - Glassmorphism e gradientes
- **Validações** - Tratamento robusto de erros

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.5.3** - Framework React
- **React 19.1.0** - Biblioteca de interface
- **Tailwind CSS 4** - Framework de estilização
- **React Query** - Gerenciamento de estado e cache
- **Headless UI** - Componentes acessíveis
- **Heroicons** - Ícones SVG
- **PokeAPI** - API oficial dos Pokémon

## 🚀 Como Executar

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/SEU-USERNAME/wsFrontend-Fabrica25.2.git
cd wsFrontend-Fabrica25.2/meu-projeto-pokemon
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── PokemonCard.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── CriarPokemonModal.js
│   │   └── EditarPokemonModal.js
│   ├── context/
│   │   └── FavoritesContext.js
│   ├── hooks/
│   │   ├── usePokemons.js
│   │   └── useCustomPokemons.js
│   ├── providers/
│   │   └── QueryProvider.js
│   ├── utils/
│   │   └── traducoes.js
│   ├── favoritos/
│   │   └── page.js
│   ├── pokemon/
│   │   └── [id]/
│   │       ├── page.js
│   │       └── DetalhesPokemon.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
```

## 🎯 Funcionalidades Detalhadas

### 🔍 Busca Inteligente
- Busca em tempo real por nome do Pokémon
- Filtros instantâneos sem necessidade de botão
- Limpeza automática ao mudar de página

### 📱 Visualizações
- **Grade** - Cards organizados em grid responsivo
- **Lista** - Visualização compacta em coluna única
- Toggle suave entre as visualizações

### ❤️ Sistema de Favoritos
- Adicionar/remover Pokémons dos favoritos
- Persistência no localStorage
- Contador de favoritos na navbar
- Página dedicada para visualizar favoritos

### 🎨 Pokémons Customizados
- Criar Pokémons personalizados
- Editar informações existentes
- Excluir Pokémons criados
- Validação de formulários
- Persistência no localStorage

## 👨‍💻 Autor

Desenvolvido para o Workshop Frontend Fábrica 25.2

---

**🎮 Explore o mundo dos Pokémon de forma interativa e moderna!**
