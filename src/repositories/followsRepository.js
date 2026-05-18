import { query } from "../lib/queryHelper";

const FOLLOW_SELECT = `
  id, created_at, author_id,
  authors ( id, name, image, bio )
`;

export const followsRepository = {
  getByFollower: (followerId) =>
    query(
      (sb) => sb.from("follows").select(FOLLOW_SELECT).eq("follower_id", followerId),
      { errorMsg: "Error fetching follows" }
    ),

  follow: (followerId, authorId) =>
    query(
      (sb) =>
        sb
          .from("follows")
          .insert({ follower_id: followerId, author_id: authorId })
          .select()
          .single(),
      { errorMsg: "Error following author", fallback: null }
    ),

  unfollow: async (followerId, authorId) => {
    const result = await query(
      (sb) =>
        sb.from("follows").delete().eq("follower_id", followerId).eq("author_id", authorId),
      { errorMsg: "Error unfollowing author", fallback: false }
    );
    // delete returns empty array on success via query helper
    return result !== false;
  },

  isFollowing: async (followerId, authorId) => {
    const result = await query(
      (sb) =>
        sb
          .from("follows")
          .select("id")
          .eq("follower_id", followerId)
          .eq("author_id", authorId)
          .maybeSingle(),
      { errorMsg: "Error checking follow status", fallback: null }
    );
    return !!result;
  },
};
