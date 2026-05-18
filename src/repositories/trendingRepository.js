import { query } from "../lib/queryHelper";

const TRENDING_SELECT = `
  id, score, created_at,
  articles (
    id, title, image, read_time, created_at,
    authors ( name, image )
  )
`;

export const trendingRepository = {
  getAll: () =>
    query(
      (sb) =>
        sb.from("trending_articles").select(TRENDING_SELECT).order("score", { ascending: false }),
      { errorMsg: "Error fetching trending articles" }
    ),
};
