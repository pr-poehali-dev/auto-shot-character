import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const features = [
    {
      icon: 'Target',
      title: 'Подсветка противников',
      description: 'Видите всех игроков через стены с настраиваемыми цветами'
    },
    {
      icon: 'Eye',
      title: 'Подсветка предметов',
      description: 'Находите оружие, деньги и предметы мгновенно'
    },
    {
      icon: 'Shield',
      title: 'Обход античита',
      description: 'Полная защита от обнаружения системами безопасности'
    },
    {
      icon: 'Settings',
      title: 'Настройки',
      description: 'Гибкая настройка всех функций под ваш стиль игры'
    }
  ]

  const faqItems = [
    {
      question: 'Безопасно ли использовать чит?',
      answer: 'Да, наш чит использует передовые технологии обхода античита и регулярно обновляется для максимальной безопасности.'
    },
    {
      question: 'Как установить чит?',
      answer: 'После покупки вы получите подробную инструкцию по установке и настройке. Процесс занимает 2-3 минуты.'
    },
    {
      question: 'Работает ли в онлайне?',
      answer: 'Да, чит полностью совместим с GTA Online и всеми игровыми режимами.'
    },
    {
      question: 'Есть ли техподдержка?',
      answer: 'Мы предоставляем круглосуточную техподдержку через Discord и Telegram для всех пользователей.'
    }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-24">
            {/* Hero Section */}
            <section className="text-center py-24 bg-gradient-to-b from-white to-gray-50">
              <div className="container mx-auto px-4">
                <h1 className="text-6xl font-bold text-black mb-6">
                  GTAV <span className="text-gray-600">CHEATS</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Профессиональные читы для GTA V с передовыми функциями подсветки и полной защитой от античита
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
                    onClick={() => setActiveSection('download')}
                  >
                    <Icon name="Download" className="mr-2" />
                    Скачать сейчас
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg"
                    onClick={() => setActiveSection('features')}
                  >
                    Узнать больше
                  </Button>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-black mb-16">Возможности</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name={feature.icon} className="text-white" size={24} />
                        </div>
                        <CardTitle className="text-black">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center text-gray-600">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Demo Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-black mb-8">Демонстрация функций</h2>
                <div className="bg-black rounded-lg p-12 max-w-4xl mx-auto">
                  <div className="grid grid-cols-3 gap-8 text-white">
                    <div className="text-center">
                      <Icon name="Users" size={48} className="mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Игроки</h3>
                      <p className="text-gray-300">Видимость через стены</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Package" size={48} className="mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Предметы</h3>
                      <p className="text-gray-300">Подсветка лута</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Zap" size={48} className="mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Скорость</h3>
                      <p className="text-gray-300">Мгновенная реакция</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )

      case 'features':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center text-black mb-16">Функции чита</h1>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">Основные возможности</h2>
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                              <Icon name={feature.icon} className="text-white" size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-black">{feature.title}</CardTitle>
                              <CardDescription className="text-gray-600">
                                {feature.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">Технические характеристики</h2>
                  <Card className="border-gray-200">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Совместимость:</span>
                          <Badge variant="secondary" className="bg-gray-100 text-black">GTA V Online</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Обновления:</span>
                          <Badge variant="secondary" className="bg-gray-100 text-black">Еженедельно</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Защита:</span>
                          <Badge variant="secondary" className="bg-gray-100 text-black">Полная</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Поддержка:</span>
                          <Badge variant="secondary" className="bg-gray-100 text-black">24/7</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )

      case 'faq':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h1 className="text-4xl font-bold text-center text-black mb-16">Часто задаваемые вопросы</h1>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                    <AccordionTrigger className="text-left text-black hover:text-gray-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )

      case 'support':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4 max-w-2xl">
              <h1 className="text-4xl font-bold text-center text-black mb-16">Поддержка</h1>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Связаться с нами</CardTitle>
                  <CardDescription className="text-gray-600">
                    Есть вопросы? Мы поможем вам в течение нескольких минут.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        className="border-gray-200 focus:border-black"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        className="border-gray-200 focus:border-black"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Опишите вашу проблему..." 
                        rows={4}
                        className="border-gray-200 focus:border-black"
                      />
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      <Icon name="Send" className="mr-2" size={16} />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Другие способы связи</h3>
                <div className="flex justify-center gap-6">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    <Icon name="MessageCircle" className="mr-2" size={16} />
                    Discord
                  </Button>
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    <Icon name="Send" className="mr-2" size={16} />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'download':
        return (
          <div className="py-16">
            <div className="container mx-auto px-4 max-w-2xl text-center">
              <h1 className="text-4xl font-bold text-black mb-8">Скачать чит</h1>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-3xl text-black">GTAV Premium Cheat</CardTitle>
                  <CardDescription className="text-gray-600">
                    Полный доступ ко всем функциям
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-black mb-2">₽1,990</div>
                    <p className="text-gray-600">Единовременная покупка</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name="Check" className="text-black" size={16} />
                        <span className="text-gray-600">{feature.title}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <Icon name="Check" className="text-black" size={16} />
                      <span className="text-gray-600">Техподдержка 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" className="text-black" size={16} />
                      <span className="text-gray-600">Пожизненные обновления</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg">
                    <Icon name="Download" className="mr-2" size={20} />
                    Купить и скачать
                  </Button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Безопасная оплата через PayPal и банковские карты
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" className="text-black" size={24} />
              <span className="font-bold text-xl text-black">GTAV CHEATS</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'features', label: 'Функции', icon: 'Zap' },
                { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
                { id: 'support', label: 'Поддержка', icon: 'MessageCircle' },
                { id: 'download', label: 'Скачать', icon: 'Download' }
              ].map((item) => (
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
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Gamepad2" className="text-white" size={24} />
                <span className="font-bold text-xl">GTAV CHEATS</span>
              </div>
              <p className="text-gray-300">
                Лучшие читы для GTA V с профессиональной поддержкой
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
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Icon name="MessageCircle" size={16} />
                  Discord: gtav_cheats
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Icon name="Send" size={16} />
                  Telegram: @gtav_support
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 GTAV CHEATS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index