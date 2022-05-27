let shoppingList = [];
shoppingList.push("Milk", "Bread", "Apples");
console.log("push to array ", shoppingList);
shoppingList.splice(1, 0, "Bannas", "Eggs");
console.log(shoppingList);
let remmovedItem = shoppingList.pop();
console.log(remmovedItem);
shoppingList.sort();
let indexOfMilk = shoppingList.indexOf("Milk");
console.log(indexOfMilk);

let indexOfBananas = shoppingList.indexOf("Bananas");
shoppingList.splice(indexOfBananas + 2, 0, "Carrots", "Lettuce");

let newShoppingList = ["Juce", "Pop"];

shoppingList = shoppingList.concat(newShoppingList, newShoppingList);

console.log(shoppingList);
