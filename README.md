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

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

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

### 📊 Página de Detalhes
- Informações completas do Pokémon
- Tipos traduzidos para português
- Estatísticas com barras de progresso
- Habilidades traduzidas
- Design responsivo e moderno

## 🌐 Deploy

O projeto está configurado para deploy no Vercel:

1. **Conecte seu repositório ao Vercel**
2. **Configure as variáveis de ambiente** (se necessário)
3. **Deploy automático** a cada push

## 🎨 Design

- **Paleta de Cores** - Gradientes suaves e modernos
- **Tipografia** - Fontes do Google (Geist)
- **Componentes** - Design system consistente
- **Animações** - Transições suaves e hover effects
- **Responsividade** - Mobile-first approach

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📱 Responsividade

- **Mobile** - Layout otimizado para smartphones
- **Tablet** - Adaptação para telas médias
- **Desktop** - Experiência completa em telas grandes

## 🚀 Performance

- **React Query** - Cache inteligente de dados
- **Lazy Loading** - Carregamento otimizado de imagens
- **Code Splitting** - Divisão automática do código
- **Otimizações** - Bundle otimizado para produção

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para o Workshop Frontend Fábrica 25.2

---

**🎮 Explore o mundo dos Pokémon de forma interativa e moderna!**