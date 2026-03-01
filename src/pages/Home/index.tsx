import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pillars from '@/components/Pillars';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pillars />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </>
  );
}