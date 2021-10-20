export function* flipCard(request) {
  yield console.log("Saga card", request)
}
