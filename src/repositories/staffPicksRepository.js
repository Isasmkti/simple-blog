import { query } from "../lib/queryHelper";

const STAFF_PICK_SELECT = `
  id, picked_at,
  articles (
    id, title, image,
    authors ( name, image )
  )
`;

export const staffPicksRepository = {
  getAll: () =>
    query(
      (sb) =>
        sb.from("staff_picks").select(STAFF_PICK_SELECT).order("picked_at", { ascending: false }),
      { errorMsg: "Error fetching staff picks" }
    ),
};
