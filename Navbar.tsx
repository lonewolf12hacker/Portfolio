import { motion } from "framer-motion";

export const Navbar = () => (
  <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full flex items-center gap-8 text-sm font-medium text-gray-300">
    <span className="text-white font-bold">Raymond.dev</span>
    {['Projects', 'Services', 'Stack'].map((link) => (
      <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a>
    ))}
    <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-200 transition">Hire Me</button>
  </motion.nav>
);
