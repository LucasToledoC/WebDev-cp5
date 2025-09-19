import { Heart, MapPin, ChefHat } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const MealCard = ({ meal, onViewRecipe, showDescription = true }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 meal-card">
      <div className="relative">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {meal.strMeal}
        </h4>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-blue-500 bg-blue-100 px-2 py-1 rounded">
            {meal.strCategory}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 flex items-center">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {meal.strArea}
          </span>
        </div>
        {showDescription && (
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">
            {meal.strInstructions?.substring(0, 100)}...
          </p>
        )}
        <Button 
          onClick={() => onViewRecipe(meal)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base py-2 sm:py-3"
        >
          <ChefHat className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Ver Receita
        </Button>
      </div>
    </div>
  )
}

export default MealCard
