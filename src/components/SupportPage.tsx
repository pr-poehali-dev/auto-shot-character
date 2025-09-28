import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const SupportPage = () => {
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
}

export default SupportPage