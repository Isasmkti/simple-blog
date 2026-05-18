import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

export default function Header() {
  const { user, loading } = useAuthStore();
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Reading", to: "/reading" },
    { label: "Write", to: "/write" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 h-16">
      <div className="flex items-center justify-between px-4 md:px-10 h-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-8">
          <Link className="font-serif text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight" to="/">Slamp</Link>
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-serif text-sm tracking-tight transition-opacity duration-200 ${
                  location.pathname === link.to
                    ? "text-zinc-900 dark:text-zinc-50 font-medium border-b border-zinc-900 dark:border-zinc-50 pb-1"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 cursor-pointer active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-50">search</span>
          </button>
          {!loading && user && (
            <button className="p-2 cursor-pointer active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-50">notifications</span>
            </button>
          )}
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-zinc-200 animate-pulse" />
          ) : user ? (
            <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200">
              <img
                alt="User profile photo"
                className="w-full h-full object-cover"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.email)}`}
              />
            </div>
          ) : (
            <Link
              to="/login"
              className="px-5 py-1.5 bg-zinc-900 text-white rounded-full font-label-sm text-[12px] hover:bg-zinc-700 active:scale-95 transition-all"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
