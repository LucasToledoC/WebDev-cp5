const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3 sm:mb-4">GourmetOn</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              Conectando você aos melhores sabores da sua cidade com rapidez, 
              qualidade e conveniência incomparáveis.
            </p>
          </div>
          
          {/* Links Úteis */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links Úteis</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400">
              <p className="text-sm sm:text-base">📧 contato@gourmeton.com</p>
              <p className="text-sm sm:text-base">📞 (11) 99999-9999</p>
              <p className="text-sm sm:text-base">📍 São Paulo, SP</p>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 GourmetOn. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
