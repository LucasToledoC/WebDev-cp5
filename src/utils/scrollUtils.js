export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Ajuste para o header fixo
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}
