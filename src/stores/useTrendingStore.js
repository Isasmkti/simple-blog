import { useDataStore } from "./useDataStore";
import { trendingService } from "../services/trendingService";

export function useTrendingStore() {
  const { data: trending, formatted: formattedTrending, loading, error, refetch } =
    useDataStore(trendingService.getAll, trendingService.formatForUI);

  return { trending, formattedTrending, loading, error, refetch };
}
