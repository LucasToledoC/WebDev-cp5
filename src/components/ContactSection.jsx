import { Button } from '@/components/ui/button.jsx'

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-primary-new">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Fique por Dentro das Novidades!</h2>
        <p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8">
          Inscreva-se em nossa newsletter para receber ofertas exclusivas e atualizações.
        </p>
        
        <div className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 text-sm sm:text-base rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none text-white bg-gray-800 placeholder-gray-300"
            />
            <Button className="bg-white text-primary-new hover:bg-gray-100 px-6 sm:px-8 py-3 font-semibold text-sm sm:text-base shadow-lg">
              Assinar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
