import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({ isScrolled, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['apresentacao', 'pratos', 'funcionalidades', 'depoimentos', 'contato']

  const handleMenuClick = (item) => {
    scrollToSection(item)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-500' : 'text-white'
              }`}>
                Gourmet<span className={isScrolled ? 'text-blue-500' : 'text-white'}>On</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 capitalize ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-500' 
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-500' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className="text-gray-700 hover:text-blue-500 hover:bg-blue-50 block px-4 py-3 rounded-md text-base font-medium w-full text-left capitalize transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
