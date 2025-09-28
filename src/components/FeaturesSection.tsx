import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const features = [
  {
    icon: 'Target',
    title: 'Подсветка противников',
    description: 'Видите всех игроков через стены с настраиваемыми цветами'
  },
  {
    icon: 'Target',
    title: 'Triggerbot по кости',
    description: 'Автоматическая стрельба при наведении на цель'
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

const FeaturesSection = () => {
  return (
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
  )
}

export { features }
export default FeaturesSection