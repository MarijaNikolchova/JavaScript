let myCar = {
    make: "Ford",
    model: "Fiesta",
    year: 2120,
    used: true,
    color: "Red"
};

let variable = "color";

myCar[variable] = "Blue";

variable = "forSale";

myCar[variable] = false;

console.log(myCar.make, " - ", myCar.model);

console.log("Is for sale: ", myCar["forSale"]);