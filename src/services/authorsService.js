import { authorsRepository } from "../repositories/authorsRepository";

export const formatAuthor = (author) => ({
  id: author.id,
  name: author.name,
  image: author.image || "",
  bio: author.bio || "",
  userId: author.user_id,
});

export const authorsService = {
  getAll: () => authorsRepository.getAll(),
  getById: (id) => authorsRepository.getById(id),
  getByUserId: (userId) => authorsRepository.getByUserId(userId),

  formatForUI(authors) {
    if (!authors || !Array.isArray(authors)) return [];
    return authors.map(formatAuthor);
  },
};
