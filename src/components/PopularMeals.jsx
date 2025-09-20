import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import MealCard from './MealCard'

const PopularMeals = ({ 
  featuredMeals, 
  loading, 
  searchTerm, 
  setSearchTerm, 
  searchResults, 
  categories, 
  categoryResults,
  onSearchMeals, 
  onRefreshMeals, 
  onViewRecipe,
  onCategoryClick,
  onClearCategory
}) => {
  return (
    <section id="pratos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pratos Populares</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">Descubra deliciosas receitas do mundo todo</p>
          
          {/* Barra de Busca */}
          <div className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar pratos... (ex: frango, curry, lasanha)"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  onSearchMeals(e.target.value)
                }}
                className="w-full px-4 py-3 pl-11 sm:pl-12 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-new focus:border-transparent transition-all text-white bg-gray-800 placeholder-gray-300"
              />
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Resultados da Busca */}
        {searchTerm && searchResults.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Resultados da Busca</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {searchResults.slice(0, 6).map((meal) => (
                <MealCard 
                  key={meal.idMeal} 
                  meal={meal} 
                  onViewRecipe={onViewRecipe}
                  showDescription={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pratos em Destaque */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Pratos em Destaque</h3>
          <div className="relative">
            {/* Container com altura mínima para evitar layout shift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 min-h-[400px]">
              {featuredMeals.map((meal) => (
                <MealCard 
                  key={meal.idMeal} 
                  meal={meal} 
                  onViewRecipe={onViewRecipe}
                />
              ))}
            </div>
            
            {/* Loading overlay que aparece por cima */}
            {loading && (
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-new"></div>
                  <p className="mt-4 text-white font-medium">Carregando pratos deliciosos...</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Botão para Recarregar Pratos */}
          <div className="text-center mb-12">
            <Button 
              onClick={onRefreshMeals}
              className="bg-secondary-new hover:bg-orange-700 text-white px-8 py-3 font-semibold shadow-lg"
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Descobrir Mais Pratos'}
            </Button>
          </div>
        </div>

        {/* Categorias */}
        {categories.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Categorias Populares</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((category) => (
                <div 
                  key={category.idCategory} 
                  onClick={() => onCategoryClick && onCategoryClick(category.strCategory)}
                  className="text-center p-3 sm:p-4 rounded-lg hover:bg-primary-light hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-primary-new"
                >
                  <img 
                    src={category.strCategoryThumb} 
                    alt={category.strCategory}
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full object-cover"
                  />
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 hover:text-primary-new transition-colors">{category.strCategory}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resultados da Categoria */}
        {categoryResults && categoryResults.length > 0 && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Receitas da Categoria</h3>
              <Button 
                onClick={onClearCategory}
                variant="outline"
                className="text-primary-new border-primary-new hover:bg-primary-new hover:text-white"
              >
                Limpar Filtro
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {categoryResults.slice(0, 12).map((meal) => (
                <MealCard 
                  key={meal.idMeal} 
                  meal={meal} 
                  onViewRecipe={onViewRecipe}
                  showDescription={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PopularMeals
