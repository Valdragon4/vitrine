import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsBento from '@/components/ProjectsBento';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SceneBackground from '@/components/scene/SceneBackground';

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-200">
      <SceneBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
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
