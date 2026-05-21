import Image from "next/image";

export const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full flex gap-8 text-sm">
    <span className="font-bold">Raymond.dev</span>
    {['About', 'Stack', 'Projects', 'Contact'].map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
  </nav>
);

export const GlassCard = ({ children, className = "" }: any) => (
  <div className={`glass p-8 rounded-3xl ${className}`}>{children}</div>
);

export const About = () => (
  <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr,2fr] gap-12 items-center fade-in">
    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
      <Image src="/1000777977.jpg" alt="Raymond" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
    </div>
    <GlassCard>
      <h2 className="text-4xl font-bold mb-6">Raymond Ibemesi</h2>
      <p className="text-gray-400">Frontend Developer building AI-powered, futuristic web experiences.</p>
    </GlassCard>
  </section>
);
