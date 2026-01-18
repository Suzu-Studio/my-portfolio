import Image from "next/image";
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">


      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
    </main>
  );
}
// Forced update to resolve IDE sync issues

