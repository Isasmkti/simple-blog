/**
 * Shared query helper — eliminates repeated error-handling boilerplate
 * across all repositories.
 *
 * @param {function} queryFn - receives the supabase client, returns a query builder
 * @param {object} opts
 * @param {string}  opts.errorMsg  - log prefix on failure
 * @param {*}       opts.fallback  - value returned on error (default: [])
 */
import { supabase } from "./supabase";

export async function query(queryFn, { errorMsg = "Query error", fallback = [] } = {}) {
  try {
    const { data, error } = await queryFn(supabase);

    // DEBUG — remove after confirming data flow works
    console.log(`[query] ${errorMsg}:`, { data, error });

    if (error) {
      console.error(`${errorMsg}:`, error);
      return fallback;
    }

    return data;
  } catch (err) {
    console.error(`${errorMsg} (exception):`, err);
    return fallback;
  }
}
