import { Search, Filter, Truck } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Busca Inteligente",
      description: "Encontre exatamente o que você está procurando com nossa busca avançada e inteligente."
    },
    {
      icon: Filter,
      title: "Filtros Personalizados",
      description: "Filtre por tipo de comida, preço, tempo de entrega e muito mais para encontrar a opção perfeita."
    },
    {
      icon: Truck,
      title: "Acompanhamento em Tempo Real",
      description: "Saiba exatamente onde está seu pedido com nosso sistema de rastreamento em tempo real."
    }
  ]

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Principais Funcionalidades</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Descubra tudo o que o GourmetOn pode fazer por você</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center p-8 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-primary-new" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
