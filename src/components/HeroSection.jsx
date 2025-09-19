import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://tse3.mm.bing.net/th/id/OIP.SiCiDbksBGXpR38nEIvWfgHaE8?r=0&w=2560&h=1707&rs=1&pid=ImgDetMain&o=7&rm=3')`,
          filter: 'blur(1px)'
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
          <span className="text-blue-500">Gourmet</span>On
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
          Seu Delivery Favorito, Rápido e Delicioso!
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          Descubra uma variedade incrível de restaurantes e receba seus pratos favoritos na porta de casa.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg animate-fade-in-up animation-delay-600">
          <Download className="mr-2" size={18} />
          Baixe Agora
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
