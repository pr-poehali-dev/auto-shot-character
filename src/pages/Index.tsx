import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HomePage from '@/components/HomePage'
import FeaturesPage from '@/components/FeaturesPage'
import FAQPage from '@/components/FAQPage'
import SupportPage from '@/components/SupportPage'
import DownloadPage from '@/components/DownloadPage'
import Footer from '@/components/Footer'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} />
      case 'features':
        return <FeaturesPage />
      case 'faq':
        return <FAQPage />
      case 'support':
        return <SupportPage />
      case 'download':
        return <DownloadPage />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderContent()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  )
}

export default Index