import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn({ email, password });
      navigate("/");
    } catch {
      // error is set by the store
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left — Branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-container relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-secondary-container/30" />
        <div className="relative z-10 px-16 max-w-lg">
          <a href="/" className="font-display text-display text-white tracking-tight">Slamp</a>
          <p className="mt-6 font-body-lg text-body-lg text-zinc-300 leading-relaxed">
            Where good ideas find you. Read, write, and connect with the thinkers shaping our world.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-primary-container" />
              <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim border-2 border-primary-container" />
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-primary-container" />
            </div>
            <span className="font-label-sm text-label-sm text-zinc-400">Join 10,000+ readers</span>
          </div>
        </div>
      </div>

      {/* Right — Login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 text-center">
            <a href="/" className="font-display text-headline-h1 text-primary tracking-tight">Slamp</a>
          </div>

          <h1 className="font-headline-h1 text-headline-h1 text-on-background mb-2">Welcome back</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10">
            Sign in to continue reading and writing.
          </p>

          {error && (
            <div className="mb-6 px-4 py-3 bg-error-container rounded-xl text-on-error-container font-label-sm text-label-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="login-email" className="font-label-sm text-label-sm text-on-surface-variant">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-body-md text-on-background placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="login-password" className="font-label-sm text-label-sm text-on-surface-variant">
                  Password
                </label>
                <a href="#" className="font-label-sm text-[12px] text-secondary hover:text-on-secondary-fixed-variant transition-colors">
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-body-md text-on-background placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3.5 bg-primary-container text-on-primary rounded-xl font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 font-label-sm text-[12px] text-outline uppercase tracking-widest">or</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3.5 border border-outline-variant rounded-xl font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <p className="mt-10 text-center font-body-md text-body-md text-on-surface-variant">
            No account?{" "}
            <Link to="/register" className="text-secondary font-semibold hover:text-on-secondary-fixed-variant transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
