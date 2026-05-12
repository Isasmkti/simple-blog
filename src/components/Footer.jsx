export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="flex flex-wrap gap-6 justify-center items-center px-6 max-w-2xl mx-auto text-center">
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">Help</a>
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">Status</a>
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">About</a>
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">Careers</a>
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">Privacy</a>
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">Terms</a>
        <a className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 hover:text-green-700 dark:hover:text-green-500 transition-colors" href="#">Teams</a>
      </div>
      <p className="font-sans text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 text-center mt-8">© 2024 The Record. Built for readers.</p>
    </footer>
  );
}
