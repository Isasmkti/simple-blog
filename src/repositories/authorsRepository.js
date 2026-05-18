import { query } from "../lib/queryHelper";

const AUTHOR_SELECT = `id, name, image, bio, user_id`;

export const authorsRepository = {
  getAll: () =>
    query((sb) => sb.from("authors").select(AUTHOR_SELECT), {
      errorMsg: "Error fetching authors",
    }),

  getById: (id) =>
    query(
      (sb) => sb.from("authors").select(AUTHOR_SELECT).eq("id", id).maybeSingle(),
      { errorMsg: "Error fetching author", fallback: null }
    ),

  getByUserId: (userId) =>
    query(
      (sb) => sb.from("authors").select(AUTHOR_SELECT).eq("user_id", userId).maybeSingle(),
      { errorMsg: "Error fetching author by user_id", fallback: null }
    ),
};
