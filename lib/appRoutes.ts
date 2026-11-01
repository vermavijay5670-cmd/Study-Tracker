/** The signed-in app sections (the sidebar pages). Things that float over every section — the top-right
 *  stopwatch/test dock and the thought-of-the-day popup — only appear on these, never on the landing or login pages. */
export const APP_ROUTES = ["/today", "/study-log", "/planner", "/question-practice", "/dashboard", "/daily-goals", "/mark-your-days"];

export function isAppRoute(pathname: string): boolean {
  return APP_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));
}
