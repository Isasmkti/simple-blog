import { useCallback } from "react";
import { useDataStore } from "./useDataStore";
import { staffPicksService } from "../services/staffPicksService";
import { topicsService } from "../services/topicsService";
import { authorsService } from "../services/authorsService";

export function useStaffPicksStore() {
  const { data: staffPicks, formatted: formattedPicks, loading, error, refetch } =
    useDataStore(staffPicksService.getAll, staffPicksService.formatForUI);

  return { staffPicks, formattedPicks, loading, error, refetch };
}

export function useTopicsStore() {
  const formatFn = useCallback((data) => topicsService.getTopicNames(data), []);

  const { data: topics, formatted: topicNames, loading, error, refetch } =
    useDataStore(topicsService.getAll, formatFn);

  return { topics, topicNames, loading, error, refetch };
}

export function useWhoToFollowStore() {
  const formatFn = useCallback(
    (data) =>
      authorsService.formatForUI(data).map((a) => ({
        id: a.id,
        name: a.name,
        description: a.bio,
        img: a.image,
      })),
    []
  );

  const { data: authors, formatted: formattedAuthors, loading, error, refetch } =
    useDataStore(authorsService.getAll, formatFn);

  return { authors, formattedAuthors, loading, error, refetch };
}
