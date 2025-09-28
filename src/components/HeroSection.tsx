import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-black mb-6">
          RageThresh
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
  )
}

export default HeroSection