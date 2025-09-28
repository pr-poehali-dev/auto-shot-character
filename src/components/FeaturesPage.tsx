import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { features } from './FeaturesSection'

const FeaturesPage = () => {
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
}

export default FeaturesPage