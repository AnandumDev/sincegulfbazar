import { useState } from 'react'
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

const App = () => {
  const [showAttarPage, setShowAttarPage] = useState(false);

  if (showAttarPage) {
    return <AttarPage onBack={() => setShowAttarPage(false)} />;
  }

  return (
    <div className='min-h-screen bg-white'>
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
    </div>
  )
}

export default App