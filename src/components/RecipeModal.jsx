import { Button } from '@/components/ui/button.jsx'

const RecipeModal = ({ meal, isOpen, onClose }) => {
  if (!isOpen || !meal) return null

  const ingredients = Array.from({length: 20}, (_, i) => i + 1)
    .map(i => ({
      ingredient: meal[`strIngredient${i}`],
      measure: meal[`strMeasure${i}`]
    }))
    .filter(item => item.ingredient && item.ingredient.trim())

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header do Modal */}
        <div className="sticky top-0 bg-white border-b p-3 sm:p-4 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 pr-4">{meal.strMeal}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold flex-shrink-0"
          >
            ×
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-3 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Imagem e Informações Básicas */}
            <div>
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-3 sm:mb-4"
              />
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                <span className="bg-primary-light text-primary-new px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {meal.strCategory}
                </span>
                <span className="bg-secondary-light text-secondary-new px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {meal.strArea}
                </span>
              </div>
              
              {/* Ingredientes */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Ingredientes</h3>
                <ul className="space-y-1 sm:space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
                  {ingredients.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm sm:text-base">
                      <span className="font-medium">{item.ingredient}</span>
                      <span className="text-gray-600 ml-2">{item.measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links Externos */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                {meal.strYoutube && (
                  <a 
                    href={meal.strYoutube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-center text-sm sm:text-base"
                  >
                    Ver no YouTube
                  </a>
                )}
                {meal.strSource && (
                  <a 
                    href={meal.strSource} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-center text-sm sm:text-base"
                  >
                    Fonte Original
                  </a>
                )}
              </div>
            </div>

            {/* Instruções */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Modo de Preparo</h3>
              <div className="prose prose-sm max-w-none max-h-64 sm:max-h-96 overflow-y-auto">
                {meal.strInstructions.split('\r\n').map((step, index) => (
                  step.trim() && (
                    <p key={index} className="mb-2 sm:mb-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                      {step}
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer do Modal */}
        <div className="border-t p-4 flex justify-end">
          <Button 
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white"
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal
