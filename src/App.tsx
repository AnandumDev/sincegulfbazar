import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import AttarCollection from './components/AttarCollection'
import BakhoorOudSection from './components/BakhoorOudSection'
import FeaturedBanner from './components/FeaturedBanner'
import BeautyCare from './components/BeautyCare'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import AttarPage from './components/AttarPage'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  const [showAttarPage, setShowAttarPage] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  if (showAttarPage) {
    return <AttarPage onBack={() => setShowAttarPage(false)} />;
  }

  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
      <Header />
      <Hero />
      <CategorySection />
      <AttarCollection onExplore={() => setShowAttarPage(true)} />
      <BakhoorOudSection />
      <FeaturedBanner />
      <BeautyCare />
      <Products />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App