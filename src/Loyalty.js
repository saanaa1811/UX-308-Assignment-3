let points = 0;
let orders = 0;

// Call this whenever an order is completed
export function addOrder(orderItems = []) {
  orders++;

  // Simple rule: 5 points per item ordered
  points += orderItems.length * 5;
}

// Return total points
export function getPoints() {
  return points;
}

// Optional: return number of orders
export function getOrderCount() {
  return orders;
}

// Reset loyalty (if needed)
export function resetLoyalty() {
  points = 0;
  orders = 0;
}