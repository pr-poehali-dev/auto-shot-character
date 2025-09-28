import Icon from '@/components/ui/icon'

const DemoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Демонстрация функций</h2>
        <div className="bg-black rounded-lg p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-12 text-white">
            <div className="text-center">
              <Icon name="Eye" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Визуалы</h3>
              <p className="text-gray-300">Лучшие undetect визуалы</p>
            </div>
            <div className="text-center">
              <Icon name="Target" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Триггер бот</h3>
              <p className="text-gray-300">По кости</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection