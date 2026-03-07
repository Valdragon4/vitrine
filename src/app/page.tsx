import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsBento from '@/components/ProjectsBento';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CinematicBackground from '@/components/CinematicBackground';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-50">
      <CinematicBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ProjectsBento />
        <Services />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
