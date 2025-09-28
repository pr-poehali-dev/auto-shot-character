import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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

const FAQPage = () => {
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
}

export default FAQPage