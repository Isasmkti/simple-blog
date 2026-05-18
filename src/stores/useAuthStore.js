import { useState, useEffect } from "react";
import { authService } from "../services/authService";

export function useAuthStore() {
  const [user, setUser] = useState(null);
  const [authorProfile, setAuthorProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get initial user
    authService
      .getCurrentUser()
      .then(async (currentUser) => {
        setUser(currentUser);
        if (currentUser) {
          const profile = await authService.getAuthorProfile(currentUser.id);
          setAuthorProfile(profile);
        }
      })
      .catch((err) => {
        console.error("Auth initialization error:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // Listen for auth changes
    const subscription = authService.onAuthStateChange(async (newUser) => {
      setUser(newUser);
      if (newUser) {
        try {
          const profile = await authService.getAuthorProfile(newUser.id);
          setAuthorProfile(profile);
        } catch (err) {
          console.error("Error fetching author profile:", err);
        }
      } else {
        setAuthorProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async ({ email, password }) => {
    try {
      setError(null);
      const data = await authService.signIn({ email, password });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleSignUp = async ({ email, password }) => {
    try {
      setError(null);
      const data = await authService.signUp({ email, password });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleSignOut = async () => {
    try {
      setError(null);
      await authService.signOut();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    user,
    authorProfile,
    loading,
    error,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  };
}
