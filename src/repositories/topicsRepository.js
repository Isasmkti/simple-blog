import { query } from "../lib/queryHelper";

const TOPIC_SELECT = `id, name`;

export const topicsRepository = {
  getAll: () =>
    query((sb) => sb.from("topics").select(TOPIC_SELECT), {
      errorMsg: "Error fetching topics",
    }),

  getById: (id) =>
    query(
      (sb) => sb.from("topics").select(TOPIC_SELECT).eq("id", id).maybeSingle(),
      { errorMsg: "Error fetching topic", fallback: null }
    ),
};
