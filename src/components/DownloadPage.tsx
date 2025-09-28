import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'
import { features } from './FeaturesSection'

const DownloadPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Скачать чит</h1>
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-3xl text-black">Triggerbot</CardTitle>
            <CardDescription className="text-gray-600">
              Выберите подходящий тариф
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-2">Недельная подписка</h3>
                <div className="text-3xl font-bold text-black mb-2">₽200</div>
                <p className="text-gray-600 mb-4">7 дней доступа</p>
                <a 
                  href="https://t.me/send?start=IV4k18Na61cP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white hover:bg-gray-800 py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Купить недельную
                </a>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-2">Месячная подписка</h3>
                <div className="text-3xl font-bold text-black mb-2">₽400</div>
                <p className="text-gray-600 mb-4">30 дней доступа</p>
                <a 
                  href="https://t.me/send?start=IV4k18Na61cP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white hover:bg-gray-800 py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Купить месячную
                </a>
              </div>
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
            
            <p className="text-sm text-gray-500 text-center">
              Безопасная оплата через Telegram Bot
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DownloadPage