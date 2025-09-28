import Icon from '@/components/ui/icon'

interface FooterProps {
  setActiveSection: (section: string) => void
}

const Footer = ({ setActiveSection }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Gamepad2" className="text-white" size={24} />
              <span className="font-bold text-xl">RageThresh</span>
            </div>
            <p className="text-gray-300">
              Лучший triggerbot по кости
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ссылки</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setActiveSection('features')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Функции
              </button>
              <button 
                onClick={() => setActiveSection('faq')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => setActiveSection('support')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Поддержка
              </button>
              <a
                href="https://youtu.be/yvS0AUt0ou8?si=RpYyOK5WcflTymcF"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Инструкция
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <a 
                href="https://discord.gg/UVt6QWBm7S"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                Discord: producertelok
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Send" size={16} />
                Telegram: @roducertelok
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 RageThresh. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer