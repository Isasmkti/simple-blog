import { topicsRepository } from "../repositories/topicsRepository";

export const formatTopic = (topic) => ({
  id: topic.id,
  name: topic.name,
});

export const topicsService = {
  getAll: () => topicsRepository.getAll(),
  getById: (id) => topicsRepository.getById(id),

  formatForUI(topics) {
    if (!topics || !Array.isArray(topics)) return [];
    return topics.map(formatTopic);
  },

  // Extract just the topic names as a flat array (for tag display)
  getTopicNames(topics) {
    if (!topics || !Array.isArray(topics)) return [];
    return topics.map((t) => t.name);
  },
};
