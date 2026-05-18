import {
  getCurrentUser,
  signIn,
  signUp,
  signOut,
  signInWithOAuth,
  onAuthStateChange,
} from "../auth/auth";
import { authorsRepository } from "../repositories/authorsRepository";

export const authService = {
  getCurrentUser,
  signIn: ({ email, password }) => signIn({ email, password }),
  signUp: ({ email, password }) => signUp({ email, password }),
  signInWithOAuth: (provider) => signInWithOAuth(provider),
  signOut,
  onAuthStateChange: (callback) => onAuthStateChange(callback),

  // Get the author profile linked to the current auth user
  getAuthorProfile: (userId) => authorsRepository.getByUserId(userId),
};
