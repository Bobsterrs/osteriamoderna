import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-lg font-bold tracking-tighter hover:opacity-70 transition-opacity">
            OSTERIA MODERNA
          </Link>
          <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <Link href="/story" className="hover:text-white transition-colors">Story</Link>
            <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
            <Link href="/chef" className="hover:text-white transition-colors">Chef</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 text-[9px] text-white/20 uppercase tracking-[0.3em]">
          <p>© 2024 Osteria Moderna. Built for Architecture.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
