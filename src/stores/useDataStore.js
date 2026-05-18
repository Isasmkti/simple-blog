import { useState, useEffect, useCallback } from "react";

/**
 * Generic data-fetching hook — eliminates the repeated
 * useState/useEffect/loading/error/refetch pattern across all stores.
 *
 * @param {function} fetchFn   - async function that returns raw data
 * @param {function} formatFn  - (optional) transforms raw data for the UI
 * @returns {{ data, formatted, loading, error, refetch }}
 */
export function useDataStore(fetchFn, formatFn = null) {
  const [data, setData] = useState([]);
  const [formatted, setFormatted] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initial fetch — no synchronous setState needed (initial values handle it)
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const result = await fetchFn();
        if (cancelled) return;
        const safeResult = result ?? [];
        setData(safeResult);
        setFormatted(formatFn ? formatFn(safeResult) : safeResult);
      } catch (err) {
        if (cancelled) return;
        console.error("useDataStore fetch error:", err);
        setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Manual refetch — called from event handlers, not effects
  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      const safeResult = result ?? [];
      setData(safeResult);
      setFormatted(formatFn ? formatFn(safeResult) : safeResult);
    } catch (err) {
      console.error("useDataStore fetch error:", err);
      setError(err.message);
      setData([]);
      setFormatted([]);
    } finally {
      setLoading(false);
    }
  }, [fetchFn, formatFn]);

  return { data, formatted, loading, error, refetch };
}

