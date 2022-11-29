console.log("------------------------------------")

Array = [];

for(let fruta of frutas) {
    console.log(fruta);
}

const fruta = ["manzana", "limon", "piña"];

fruta.push("mango");
fruta.unshift("fresa");
console.log(fruta);

const frutadelet = fruta.pop();
console.log(frutadelet);

const frutdelet2 = fruta.shift();
console.log(frutdelet2);