import { useState } from 'react'

export const useRecipeModal = () => {
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Função para abrir modal de receita
  const openRecipeModal = (meal) => {
    setSelectedMeal(meal)
    setShowModal(true)
    document.body.style.overflow = 'hidden' // Prevenir scroll do body
  }

  // Função para fechar modal
  const closeRecipeModal = () => {
    setShowModal(false)
    setSelectedMeal(null)
    document.body.style.overflow = 'unset' // Restaurar scroll do body
  }

  return {
    selectedMeal,
    showModal,
    openRecipeModal,
    closeRecipeModal
  }
}
