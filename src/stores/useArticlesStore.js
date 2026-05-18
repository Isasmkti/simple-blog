import { useDataStore } from "./useDataStore";
import { articlesService } from "../services/articlesService";

export function useArticlesStore() {
  const { data: articles, formatted: formattedArticles, loading, error, refetch } =
    useDataStore(articlesService.getAll, articlesService.formatForUI);

  return { articles, formattedArticles, loading, error, refetch };
}
