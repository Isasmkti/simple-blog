export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 h-16">
      <div className="flex items-center justify-between px-4 md:px-10 h-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-8">
          <a className="font-serif text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight" href="/">Slamp</a>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="font-serif text-sm tracking-tight text-zinc-900 dark:text-zinc-50 font-medium border-b border-zinc-900 dark:border-zinc-50 pb-1" href="/">Home</a>
            <a className="font-serif text-sm tracking-tight text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-opacity duration-200" href="/reading">Reading</a>
            <a className="font-serif text-sm tracking-tight text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-opacity duration-200" href="/write">Write</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 cursor-pointer active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-50">search</span>
          </button>
          <button className="p-2 cursor-pointer active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-50">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200">
            <img alt="User profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhyi92oNmJUx7gSQs_Xjv7-pnmD9cS1DdlLkc5wTvS2QbU4EGO5I0b6BXLo7omg7EBD9pZnDrwZbN9DHWcOKSCPhTq6KJXdjBwtQlLfxx5_RGmfy9l67S4A1FvWl5u0LtDJkQYf_OLydwnaG-bClc2vfDUTgACWijCZ2AOPSTPoE1yC5c4RI4FbWDg_uTWl-FZp4zUdlm7hySnnHa7l_UXieNGHTFBRIHTvcHJorTL6spwseYYSMDkpv7jltOXkoRYetiFW2MaTgg" />
          </div>
        </div>
      </div>
    </header>
  );
}
