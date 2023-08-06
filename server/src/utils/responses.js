/**
 * Sends allow message to client
 *
 * @param {import("ws").WebSocket} ws WebSocket instance
 * @param {import("@/models/response").UpdateResponse['gameState']} gameState
 */
export async function sendUpdate(ws, gameState) {
  if (ws.readyState !== ws.OPEN) return;

  const encodedData = JSON.stringify({ id: "update", gameState });
  ws.send(encodedData);
}

/**
 * Sends allow message to client
 *
 * @param {import("ws").WebSocket} ws WebSocket instance
 * @param {Omit<import("@/models/response").AllowResponse, "commandSuccessful">} data
 */
export function sendAllow(ws, data) {
  if (ws.readyState !== ws.OPEN) return;

  const encodedData = JSON.stringify({ ...data, commandSuccessful: true });
  ws.send(encodedData);
}

/**
 * Sends reject message to client
 *
 * @param {import("ws").WebSocket} ws WebSocket instance
 * @param {Omit<import("@/models/response").RejectResponse, "commandSuccessful">} data
 */
export function sendReject(ws, data) {
  if (ws.readyState !== ws.OPEN) return;

  const encodedData = JSON.stringify({ ...data, commandSuccessful: false });
  ws.send(encodedData);
}
