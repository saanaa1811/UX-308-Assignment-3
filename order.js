let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
}

let order = [];
let currentItem = {};


function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to Sana's Coffee.");
  aReturn.push("Menu: Coffee, Latte");
  aReturn.push("What would you like to order?");

  return aReturn;
}


function choosingItem(sInput) {
  let aReturn = [];

  if (sInput.toLowerCase() === "coffee" || sInput.toLowerCase() === "latte") {
    currentItem = { name: sInput };
    currentState = choosingSize;
    aReturn.push("What size? (small / medium / large)");
  } else {
    aReturn.push("Please choose Coffee or Latte");
  }

  return aReturn;
}


function choosingSize(sInput) {
  let aReturn = [];

  currentItem.size = sInput;
  currentState = choosingExtra;

  if (currentItem.name.toLowerCase() === "coffee") {
    aReturn.push("How do you like it? (black / milk / sugar)");
  } else {
    aReturn.push("Choose flavor: (vanilla / caramel)");
  }

  return aReturn;
}


function choosingExtra(sInput) {
  let aReturn = [];

  currentItem.extra = sInput;
  order.push(currentItem);

  aReturn.push(currentItem.size + " " + currentItem.name + " with " + currentItem.extra + " added.");
  aReturn.push("Would you like to order another item? (yes/no)");

  currentState = addMore;
  return aReturn;
}


function addMore(sInput) {
  let aReturn = [];

  if (sInput.toLowerCase().startsWith("y")) {
    currentState = choosingItem;
    aReturn.push("What else would you like?");
  } else {
    currentState = upsell;
    aReturn.push("Would you like a pastry? (yes/no)");
  }

  return aReturn;
}


function upsell(sInput) {
  let aReturn = [];

  if (sInput.toLowerCase().startsWith("y")) {
    currentState = pastryChoice;
    aReturn.push("Choose a pastry: (croissant / muffin)");
  } else {
    currentState = done;
    aReturn.push("Your order is complete.");
  }

  return aReturn;
}


function pastryChoice(sInput) {
  let aReturn = [];

  order.push({ pastry: sInput });

  aReturn.push(sInput + " added.");
  aReturn.push("Order complete. Thank you.");

  currentState = done;
  return aReturn;
}


function done() {
  return ["Thanks for visiting Sana's Coffee."];
}