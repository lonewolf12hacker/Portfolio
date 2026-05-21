import './index.css';
import { Navbar, About, GlassCard } from "./Components";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow" />
      </div>
      
      <Navbar />
      
      <section className="h-screen flex flex-col justify-center items-center text-center fade-in">
        <h1 className="text-7xl font-bold mb-6">Building AI Experiences</h1>
        <p className="text-xl text-gray-400">Raymond Ibemesi | Frontend Engineer</p>
      </section>

      <About />

      <section id="projects" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => <GlassCard key={i} className="h-64 flex items-end">Project {i}</GlassCard>)}
      </section>

      <section id="contact" className="py-32 text-center">
        <GlassCard className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Build the Future</h2>
          <a href="mailto:email@example.com" className="px-8 py-3 bg-white text-black rounded-full font-bold">Email Me</a>
        </GlassCard>
      </section>
    </main>
  );
}
