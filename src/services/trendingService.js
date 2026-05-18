import { trendingRepository } from "../repositories/trendingRepository";
import { formatDate } from "../lib/formatDate";

export const formatTrending = (item, index) => ({
  id: String(index + 1).padStart(2, "0"),
  articleId: item.articles?.id,
  author: item.articles?.authors?.name || "Unknown Author",
  authorImg: item.articles?.authors?.image || "",
  title: item.articles?.title || "",
  date: formatDate(item.articles?.created_at),
  readTime: item.articles?.read_time || "",
  score: item.score,
});

export const trendingService = {
  getAll: () => trendingRepository.getAll(),

  formatForUI(items) {
    if (!items || !Array.isArray(items)) return [];
    return items.map(formatTrending);
  },
};
