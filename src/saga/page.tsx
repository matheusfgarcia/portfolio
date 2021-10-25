import { getActivePage } from "../selectors/page"

export function* activePage(request: ReturnType<typeof getActivePage>) {
  yield console.log("Saga page", request)
}
