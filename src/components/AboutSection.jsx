import { Clock, MapPin, CreditCard } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Receba seus pedidos em tempo recorde, com entregadores eficientes e dedicados."
    },
    {
      icon: MapPin,
      title: "Variedade de Restaurantes", 
      description: "Explore um catálogo extenso de cozinhas e restaurantes para todos os gostos."
    },
    {
      icon: CreditCard,
      title: "Pagamento Fácil",
      description: "Opções de pagamento seguras e descomplicadas para sua conveniência."
    }
  ]

  return (
    <section id="apresentacao" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o <span className="text-blue-500">GourmetOn</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg hover-lift">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transformando a experiência de delivery
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              O GourmetOn conecta você aos melhores restaurantes da sua região, 
              oferecendo uma experiência única de pedidos online com tecnologia 
              de ponta e atendimento excepcional.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Restaurantes</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">50k+</div>
                <div className="text-sm sm:text-base text-gray-600">Clientes Felizes</div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Delivery Experience" 
              className="rounded-lg shadow-2xl w-full h-64 sm:h-80 lg:h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
