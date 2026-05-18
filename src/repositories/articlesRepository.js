import { query } from "../lib/queryHelper";

// Reusable select fragments
const ARTICLE_LIST_SELECT = `
  id, title, description, content, image,
  created_at, read_time, is_trending, is_staff_pick,
  authors ( name, image ),
  article_topics ( topics ( name ) )
`;

const ARTICLE_DETAIL_SELECT = `
  id, title, description, content, image,
  created_at, read_time, is_trending, is_staff_pick,
  authors ( id, name, image, bio ),
  article_topics ( topics ( id, name ) )
`;

export const articlesRepository = {
  getAll: () =>
    query((sb) => sb.from("articles").select(ARTICLE_LIST_SELECT), {
      errorMsg: "Error fetching articles",
    }),

  getById: (id) =>
    query(
      (sb) => sb.from("articles").select(ARTICLE_DETAIL_SELECT).eq("id", id).maybeSingle(),
      { errorMsg: "Error fetching article", fallback: null }
    ),

  getByAuthor: (authorId) =>
    query(
      (sb) =>
        sb
          .from("articles")
          .select(ARTICLE_LIST_SELECT)
          .eq("author_id", authorId)
          .order("created_at", { ascending: false }),
      { errorMsg: "Error fetching articles by author" }
    ),
};