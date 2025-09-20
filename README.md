# 🍽️ GourmetOn - Landing Page

Uma landing page moderna e responsiva para o aplicativo de delivery GourmetOn, desenvolvida com React, Vite e Tailwind CSS, integrada com a API TheMealDB para exibir pratos reais.

## 🚀 Demonstração

🔗 **[Ver Demo Online](https://lucastoledoc.github.io/WebDev-cp5/)**

## ✨ Funcionalidades

### 🎯 **Principais Recursos:**
- **Hero Section** com call-to-action atrativo
- **Navegação responsiva** com menu mobile
- **Integração com API** TheMealDB para pratos reais
- **Busca em tempo real** de receitas
- **Modal de receitas** com ingredientes e instruções
- **Design totalmente responsivo** (mobile, tablet, desktop)
- **Animações suaves** e efeitos hover
- **Seções completas:** Sobre, Funcionalidades, Depoimentos, Contato

### 🔍 **Funcionalidades da API:**
- Exibição de 6 pratos aleatórios em destaque
- Sistema de busca por nome de prato
- Categorias populares com imagens
- Modal detalhado com:
  - Ingredientes com quantidades
  - Instruções passo a passo
  - Links para YouTube e fonte original
  - Informações de categoria e país

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **TheMealDB API** - API gratuita de receitas
- **GitHub Pages** - Hospedagem gratuita

## 📱 Responsividade

A aplicação foi desenvolvida com foco em responsividade total:

- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints:** 320px, 640px, 768px, 1024px, 1280px+
- **Grids adaptativos:** 1→2→3 colunas conforme o tamanho da tela
- **Navegação mobile** com menu hambúrguer
- **Modal responsivo** com scroll otimizado
- **Textos e espaçamentos** adaptativos

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                 # Componentes base do shadcn/ui
│   ├── AboutSection.jsx    # Seção "Por que escolher"
│   ├── ContactSection.jsx  # Newsletter e contato
│   ├── FeaturesSection.jsx # Principais funcionalidades
│   ├── Footer.jsx          # Rodapé
│   ├── Header.jsx          # Navegação
│   ├── HeroSection.jsx     # Seção principal
│   ├── MealCard.jsx        # Card de prato reutilizável
│   ├── PopularMeals.jsx    # Seção de pratos com API
│   ├── RecipeModal.jsx     # Modal de receita
│   └── TestimonialsSection.jsx # Depoimentos
├── hooks/
│   ├── useMealAPI.js       # Hook para gerenciar API
│   └── useRecipeModal.js   # Hook para modal
├── utils/
│   └── scrollUtils.js      # Utilitários de scroll
├── App.jsx                 # Componente principal
└── main.jsx               # Ponto de entrada
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Instalação
```bash
# Clone o repositório
git clone https://github.com/LucasToledoC/WebDev-cp5.git

# Entre no diretório
cd WebDev-cp5

# Instale as dependências
npm install
# ou
pnpm install

# Execute o servidor de desenvolvimento
npm run dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📦 Build para Produção

```bash
# Gerar build otimizado
npm run build
# ou
pnpm build

# Preview do build
npm run preview
# ou
pnpm preview
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

1. O código é enviado para a branch `master`
2. GitHub Actions executa o build automaticamente
3. Deploy é feito na branch `gh-pages`
4. Site fica disponível em: https://lucastoledoc.github.io/WebDev-cp5/

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `src/App.css` e nos componentes:
- **Azul primário:** `#3b82f6` (blue-500)
- **Azul hover:** `#2563eb` (blue-600)
- **Cinza:** `#6b7280` (gray-500)

### API
Para usar uma API diferente, modifique o hook `useMealAPI.js`:
```javascript
// Altere as URLs da API
const API_BASE = 'https://sua-api.com'
```

## 📋 Funcionalidades Implementadas

- ✅ Hero Section responsiva
- ✅ Navegação com scroll suave
- ✅ Integração com TheMealDB API
- ✅ Busca em tempo real
- ✅ Modal de receitas
- ✅ Design responsivo completo
- ✅ Animações e transições
- ✅ Componentização modular
- ✅ Hooks customizados
- ✅ Deploy automatizado

## 👥 Equipe

- **Desenvolvedores:** 
- Guilherme de Araújo Moreira: [561848]
- Leonardo da Silva Pinto: [564929]
- Lucas Toledo Cortonezi: [563271]
- Samuel Enzo Domingues Monteiro: [564391]
- Yan Breno Barutti Conceição: [566412]

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do checkpoint da disciplina de Web Development da FIAP.

## 🔗 Links Úteis

- [TheMealDB API](https://www.themealdb.com/api.php) - API de receitas utilizada
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide Icons](https://lucide.dev/) - Biblioteca de ícones
- [Vite](https://vitejs.dev/) - Build tool

