import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsBento from '@/components/ProjectsBento';
import Products from '@/components/Products';
import Engineering from '@/components/Engineering';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SceneBackground from '@/components/scene/SceneBackground';

export default function Home() {
  return (
    <main className="min-h-screen text-ink-200">
      <SceneBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Products />
        <Engineering />
        <Services />
        <ProjectsBento />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
