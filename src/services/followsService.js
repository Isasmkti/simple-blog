import { followsRepository } from "../repositories/followsRepository";

export const formatFollow = (follow) => ({
  id: follow.authors?.id,
  name: follow.authors?.name || "Unknown",
  image: follow.authors?.image || "",
  bio: follow.authors?.bio || "",
});

export const followsService = {
  getByFollower: (followerId) => followsRepository.getByFollower(followerId),
  follow: (followerId, authorId) => followsRepository.follow(followerId, authorId),
  unfollow: (followerId, authorId) => followsRepository.unfollow(followerId, authorId),
  isFollowing: (followerId, authorId) => followsRepository.isFollowing(followerId, authorId),

  formatForUI(follows) {
    if (!follows || !Array.isArray(follows)) return [];
    return follows.map(formatFollow);
  },
};
