/**
 * Shared date formatter — used by articlesService and trendingService.
 * Returns "Oct 12" style strings.
 */
export function formatDate(dateString) {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
