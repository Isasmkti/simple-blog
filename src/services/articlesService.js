import { articlesRepository } from "../repositories/articlesRepository";
import { formatDate } from "../lib/formatDate";

// Fungsi terpisah untuk alias/formatting data (menyesuaikan struktur untuk UI)
export const formatArticle = (article) => ({
  id: article.id,
  author: article.authors?.name || "Unknown Author",
  authorImg: article.authors?.image || "",
  inCategory: article.is_staff_pick ? "Staff Pick" : null,
  title: article.title,
  description: article.description,
  date: formatDate(article.created_at),
  readTime: article.read_time,
  topic: article.article_topics?.[0]?.topics?.name || "Uncategorized",
  image: article.image,
  isTrending: article.is_trending,
  isStaffPick: article.is_staff_pick,
  content: article.content,
});

export const articlesService = {
  getAll: () => articlesRepository.getAll(),
  getById: (id) => articlesRepository.getById(id),
  getByAuthor: (authorId) => articlesRepository.getByAuthor(authorId),

  // Fungsi khusus untuk memformat array data dari DB ke format UI
  formatForUI(articles) {
    if (!articles || !Array.isArray(articles)) return [];
    return articles.map(formatArticle);
  },
};
