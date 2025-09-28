import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import DemoSection from './DemoSection'

interface HomePageProps {
  setActiveSection: (section: string) => void
}

const HomePage = ({ setActiveSection }: HomePageProps) => {
  return (
    <div className="space-y-24">
      <HeroSection setActiveSection={setActiveSection} />
      <FeaturesSection />
      <DemoSection />
    </div>
  )
}

export default HomePage