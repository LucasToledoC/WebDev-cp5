import { useState, useEffect } from 'react'

// Dicionário de tradução português -> inglês para busca
const translateToEnglish = {
  // Carnes
  'frango': 'chicken',
  'carne': 'beef',
  'porco': 'pork',
  'cordeiro': 'lamb',
  'peru': 'turkey',
  'bacon': 'bacon',
  'presunto': 'ham',
  
  // Peixes e frutos do mar
  'peixe': 'fish',
  'salmão': 'salmon',
  'atum': 'tuna',
  'camarão': 'shrimp',
  'lagosta': 'lobster',
  'caranguejo': 'crab',
  'polvo': 'octopus',
  'lula': 'squid',
  
  // Vegetais
  'tomate': 'tomato',
  'cebola': 'onion',
  'alho': 'garlic',
  'batata': 'potato',
  'cenoura': 'carrot',
  'abobrinha': 'courgette',
  'pimentão': 'pepper',
  'brócolis': 'broccoli',
  'cogumelo': 'mushroom',
  
  // Massas e carboidratos
  'massa': 'pasta',
  'macarrão': 'pasta',
  'espaguete': 'spaghetti',
  'lasanha': 'lasagne',
  'arroz': 'rice',
  'pão': 'bread',
  'pizza': 'pizza',
  
  // Pratos típicos
  'curry': 'curry',
  'sopa': 'soup',
  'salada': 'salad',
  'sobremesa': 'dessert',
  'bolo': 'cake',
  'torta': 'tart',
  'biscoito': 'cookie',
  
  // Outros ingredientes
  'queijo': 'cheese',
  'leite': 'milk',
  'ovo': 'egg',
  'manteiga': 'butter',
  'azeite': 'olive oil',
  'vinagre': 'vinegar',
  'sal': 'salt',
  'pimenta': 'pepper',
  'açúcar': 'sugar',
  'farinha': 'flour'
}

export const useMealAPI = () => {
  const [featuredMeals, setFeaturedMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([])
  const [categories, setCategories] = useState([])
  const [categoryResults, setCategoryResults] = useState([])

  // Função para traduzir busca do português para inglês
  const translateSearch = (query) => {
    const lowerQuery = query.toLowerCase().trim()
    
    // Procura por correspondência exata primeiro
    if (translateToEnglish[lowerQuery]) {
      return translateToEnglish[lowerQuery]
    }
    
    // Procura por correspondência parcial
    for (const [portuguese, english] of Object.entries(translateToEnglish)) {
      if (lowerQuery.includes(portuguese) || portuguese.includes(lowerQuery)) {
        return english
      }
    }
    
    // Se não encontrar tradução, retorna a query original
    return query
  }

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
      console.error('Erro ao buscar novos pratos:', error)
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

  // Função para buscar pratos por nome (com suporte ao português)
  const searchMeals = async (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    
    try {
      // Primeiro tenta buscar com a query original
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      let data = await response.json()
      
      // Se não encontrar resultados, tenta com a tradução
      if (!data.meals || data.meals.length === 0) {
        const translatedQuery = translateSearch(query)
        if (translatedQuery !== query) {
          response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${translatedQuery}`)
          data = await response.json()
        }
      }
      
      setSearchResults(data.meals || [])
    } catch (error) {
      console.error('Erro na busca:', error)
      setSearchResults([])
    }
  }

  // Função para buscar pratos por categoria
  const searchByCategory = async (categoryName) => {
    try {
      setLoading(true)
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      const data = await response.json()
      setCategoryResults(data.meals || [])
    } catch (error) {
      console.error('Erro ao buscar por categoria:', error)
      setCategoryResults([])
    } finally {
      setLoading(false)
    }
  }

  // Função para limpar resultados de categoria
  const clearCategoryResults = () => {
    setCategoryResults([])
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
    categoryResults,
    fetchFeaturedMeals,
    discoverMoreMeals,
    searchMeals,
    searchByCategory,
    clearCategoryResults
  }
}