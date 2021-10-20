import { getCardState } from "../selectors/card"

export function* flipCard(request : ReturnType<typeof getCardState>) {
  yield console.log("Saga card", request)
}
