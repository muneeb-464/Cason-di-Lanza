import HeroSection      from '../components/home/HeroSection'
import MarqueeSection   from '../components/home/MarqueeSection'
import ServicesGrid     from '../components/home/ServicesGrid'
import AboutSection     from '../components/home/AboutSection'
import GallerySection   from '../components/home/GallerySection'
import HoursBanner      from '../components/home/HoursBanner'
import ContactSection   from '../components/home/ContactSection'
import MapSection       from '../components/home/MapSection'
import NewsletterSection from '../components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesGrid />
      <AboutSection />
      <GallerySection />
      <HoursBanner />
      <ContactSection />
      <MapSection />
      <NewsletterSection />
    </>
  )
}
