import Hero from "./(marketing)/_components/Hero"
import Logos from "./(marketing)/_components/Logos"
import Features from "./(marketing)/_components/Features"
import Testimonials from "./(marketing)/_components/Testimonials"
import FAQ from "./(marketing)/_components/FAQ"
import CTA from "./(marketing)/_components/CTA"
import Footer from "./(marketing)/_components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
