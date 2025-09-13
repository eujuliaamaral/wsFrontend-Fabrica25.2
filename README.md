# 🎮 Pokédex Interativa

Uma aplicação web moderna e interativa para explorar o mundo dos Pokémon, desenvolvida com Next.js, React Query e Tailwind CSS.

## 🚀 Deploy
Projeto online: [ws-frontend-fabrica25-2-lilac.vercel.app](https://ws-frontend-fabrica25-2-lilac.vercel.app)

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
- **PokeAPI** - API oficial dos Pokémons

## 🚀 Como Executar

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/eujuliaamaral/wsFrontend-Fabrica25.2.git
cd wsFrontend-Fabrica25.2/
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
WSFRONTENDFABRICA25.2/
├── 📁 .next/                    # Arquivos gerados pelo Next.js (build)
├── 📁 node_modules/             # Dependências do projeto
├── 📁 public/                   # Arquivos estáticos públicos
├── 📁 src/                      # Código fonte da aplicação
├── 📄 .gitignore               # Arquivos ignorados pelo Git
├── ⚙️ eslint.config.mjs        # Configurações do ESLint
├── 📋 jsconfig.json            # Configurações do JavaScript/TypeScript
├── ⚙️ next.config.mjs          # Configurações do Next.js
├── 🔒 package-lock.json        # Lock file das dependências
├── 📦 package.json             # Dependências e scripts do projeto
├── 🎨 postcss.config.mjs       # Configurações do PostCSS
└── 📖 README.md                # Documentação do projeto
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


---

**🎮 Explore o mundo dos Pokémon de forma interativa e moderna!**
