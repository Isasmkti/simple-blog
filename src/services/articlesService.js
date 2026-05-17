import { articlesRepository } from "../repositories/articlesRepository";

export const articlesService = {
  async getAll() {
    const data = await articlesRepository.getAll();
    
    return data.map((article) => {
      const dateObj = new Date(article.created_at);
      const dateStr = dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      return {
        id: article.id,
        author: article.authors?.name || "Unknown Author",
        authorImg: article.authors?.image || "",
        inCategory: article.is_staff_pick ? "Staff Pick" : null,
        title: article.title,
        description: article.description,
        date: dateStr,
        readTime: article.read_time,
        topic: article.article_topics?.[0]?.topics?.name || "Uncategorized",
        image: article.image,
        isTrending: article.is_trending,
        isStaffPick: article.is_staff_pick,
        content: article.content
      };
    });
  },
};
