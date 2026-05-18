import { staffPicksRepository } from "../repositories/staffPicksRepository";

export const formatStaffPick = (pick) => ({
  id: pick.id,
  pickedAt: pick.picked_at,
  articleId: pick.articles?.id,
  title: pick.articles?.title || "",
  image: pick.articles?.image || "",
  author: pick.articles?.authors?.name || "Unknown Author",
  authorImg: pick.articles?.authors?.image || "",
});

export const staffPicksService = {
  getAll: () => staffPicksRepository.getAll(),

  formatForUI(picks) {
    if (!picks || !Array.isArray(picks)) return [];
    return picks.map(formatStaffPick);
  },
};
