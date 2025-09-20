import { useState, useEffect } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PopularMeals from './components/PopularMeals'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import RecipeModal from './components/RecipeModal'

// Hooks
import { useMealAPI } from './hooks/useMealAPI'
import { useRecipeModal } from './hooks/useRecipeModal'

// Utils
import { scrollToSection } from './utils/scrollUtils'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Custom hooks
  const {
    featuredMeals,
    loading,
    searchResults,
    categories,
    categoryResults,
    fetchFeaturedMeals,
    discoverMoreMeals,
    searchMeals,
    searchByCategory,
    clearCategoryResults
  } = useMealAPI()

  const {
    selectedMeal,
    showModal,
    openRecipeModal,
    closeRecipeModal
  } = useRecipeModal()

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Header 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection />
      
      <AboutSection />
      
      <PopularMeals
        featuredMeals={featuredMeals}
        loading={loading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
        categories={categories}
        categoryResults={categoryResults}
        onSearchMeals={searchMeals}
        onRefreshMeals={discoverMoreMeals}
        onViewRecipe={openRecipeModal}
        onCategoryClick={searchByCategory}
        onClearCategory={clearCategoryResults}
      />
      
      <FeaturesSection />
      
      <TestimonialsSection />
      
      <ContactSection />
      
      <Footer />

      <RecipeModal
        meal={selectedMeal}
        isOpen={showModal}
        onClose={closeRecipeModal}
      />
    </div>
  )
}

export default App
