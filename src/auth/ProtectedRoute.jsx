import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

/**
 * ProtectedRoute — route guard that redirects unauthenticated users to /login.
 *
 * Usage:
 *   <Route element={<ProtectedRoute />}>
 *     <Route path="/write" element={<WritePage />} />
 *   </Route>
 *
 * Or wrap a single page:
 *   <Route path="/write" element={<ProtectedRoute><WritePage /></ProtectedRoute>} />
 */
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-8 w-8 text-secondary" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
