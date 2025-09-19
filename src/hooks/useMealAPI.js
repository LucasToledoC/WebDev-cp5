import { useState, useEffect } from 'react'

export const useMealAPI = () => {
  const [featuredMeals, setFeaturedMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([])
  const [categories, setCategories] = useState([])

  // Função para buscar pratos em destaque
  const fetchFeaturedMeals = async () => {
    try {
      setLoading(true)
      const meals = []
      // Buscar 6 pratos aleatórios
      for (let i = 0; i < 6; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await response.json()
        if (data.meals && data.meals[0]) {
          meals.push(data.meals[0])
        }
      }
      setFeaturedMeals(meals)
    } catch (error) {
      console.error('Erro ao buscar pratos:', error)
    } finally {
      setLoading(false)
    }
  }

  // Função específica para descobrir mais pratos sem scroll
  const discoverMoreMeals = async () => {
    try {
      setLoading(true)
      const meals = []
      // Buscar 6 pratos aleatórios
      for (let i = 0; i < 6; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await response.json()
        if (data.meals && data.meals[0]) {
          meals.push(data.meals[0])
        }
      }
      setFeaturedMeals(meals)
    } catch (error) {
      console.error('Erro ao buscar pratos:', error)
    } finally {
      setLoading(false)
    }
  }

  // Função para buscar categorias
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json()
      if (data.categories) {
        setCategories(data.categories.slice(0, 8)) // Pegar apenas 8 categorias
      }
    } catch (error) {
      console.error('Erro ao buscar categorias:', error)
    }
  }

  // Função para buscar pratos por nome
  const searchMeals = async (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await response.json()
      setSearchResults(data.meals || [])
    } catch (error) {
      console.error('Erro na busca:', error)
      setSearchResults([])
    }
  }

  // Carregar dados iniciais
  useEffect(() => {
    fetchFeaturedMeals()
    fetchCategories()
  }, [])

  return {
    featuredMeals,
    loading,
    searchResults,
    categories,
    fetchFeaturedMeals,
    discoverMoreMeals,
    searchMeals
  }
}
