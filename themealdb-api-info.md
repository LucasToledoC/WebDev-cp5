# TheMealDB API - Endpoints Úteis

## Endpoints Gratuitos Disponíveis:

### 1. Buscar refeição por nome
- URL: `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
- Uso: Buscar pratos específicos

### 2. Buscar refeição aleatória
- URL: `https://www.themealdb.com/api/json/v1/1/random.php`
- Uso: Exibir pratos aleatórios na página

### 3. Listar categorias
- URL: `https://www.themealdb.com/api/json/v1/1/categories.php`
- Uso: Mostrar tipos de comida disponíveis

### 4. Filtrar por categoria
- URL: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
- Uso: Filtrar pratos por tipo (Seafood, Chicken, etc.)

### 5. Filtrar por ingrediente
- URL: `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
- Uso: Buscar pratos com ingredientes específicos

### 6. Detalhes completos por ID
- URL: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
- Uso: Obter receita completa

## Estrutura de Dados:
- Cada prato tem: nome, imagem, categoria, área, instruções, ingredientes
- Imagens estão disponíveis em diferentes tamanhos
- API gratuita com chave de teste "1"

## Implementação Planejada:
1. Seção de pratos populares com chamadas aleatórias
2. Busca funcional de pratos
3. Filtros por categoria
4. Exibição de detalhes dos pratos
