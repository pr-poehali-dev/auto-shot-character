import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'features', label: 'Функции', icon: 'Zap' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
    { id: 'support', label: 'Поддержка', icon: 'MessageCircle' },
    { id: 'download', label: 'Скачать', icon: 'Download' }
  ]

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" className="text-black" size={24} />
            <span className="font-bold text-xl text-black">RageThresh</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
            <a
              href="https://youtu.be/yvS0AUt0ou8?si=RpYyOK5WcflTymcF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-600 hover:text-black hover:bg-gray-100"
            >
              <Icon name="BookOpen" size={16} />
              Инструкция
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeSection === item.id 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  {item.label}
                </button>
              ))}
              <a
                href="https://youtu.be/yvS0AUt0ou8?si=RpYyOK5WcflTymcF"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors text-gray-600 hover:text-black hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon name="BookOpen" size={20} />
                Инструкция
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation