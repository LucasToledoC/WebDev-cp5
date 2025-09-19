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
  onSearchMeals, 
  onRefreshMeals, 
  onViewRecipe 
}) => {
  return (
    <section id="pratos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pratos Populares</h2>
          <p className="text-xl text-gray-600 mb-8">Descubra deliciosas receitas do mundo todo</p>
          
          {/* Barra de Busca */}
          <div className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar pratos..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  onSearchMeals(e.target.value)
                }}
                className="w-full px-4 py-3 pl-11 sm:pl-12 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">Carregando pratos deliciosos...</p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Pratos em Destaque</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {featuredMeals.map((meal) => (
                <MealCard 
                  key={meal.idMeal} 
                  meal={meal} 
                  onViewRecipe={onViewRecipe}
                />
              ))}
            </div>
            
            {/* Botão para Recarregar Pratos - Movido para cá */}
            <div className="text-center mb-12">
              <Button 
                onClick={onRefreshMeals}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
                disabled={loading}
              >
                {loading ? 'Carregando...' : 'Descobrir Mais Pratos'}
              </Button>
            </div>
          </div>
        )}

        {/* Categorias */}
        {categories.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Categorias Populares</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((category) => (
                <div key={category.idCategory} className="text-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <img 
                    src={category.strCategoryThumb} 
                    alt={category.strCategory}
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full object-cover"
                  />
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900">{category.strCategory}</h4>
                </div>
              ))}
            </div>
            </div>
          )}
      </div>
    </section>
  )
}

export default PopularMeals
