/* Opdracht 0: voorbeeld */
// Verwijder het laatste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Vanille extract' en [ 'Eieren', 'Bloem', 'Bakpoeder' ]

const cookieIngredients = ["Eieren", "Bloem", "Bakpoeder", "Vanille extract"];

const lastItem = cookieIngredients.pop();
console.log(lastItem);
console.log(cookieIngredients);
console.log(cookieIngredients.pop());
console.log(cookieIngredients);
/* Opdracht 1: */
// Voeg een nieuw item toe aan onderstaande array en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Hawai', 'Margherita', 'Salami' ]

const pizzas = ["Hawai", "Margherita"];
console.log(pizzas)
pizzas.push("Salami")

console.log(pizzas)



/* Opdracht 2: */
// Verwijder het éérste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Noten' en [ 'Eieren', 'Bloem', 'Cacao', 'Chocoladestukjes', 'Bakpoeder' ]

const brownieIngredients = ["Noten", "Eieren", "Bloem", "Cacao", "Chocoladestukjes", "Bakpoeder"];

console.log(brownieIngredients);

// Verwijder het eerste item uit de array
brownieIngredients.splice(0, 1);
console.log(brownieIngredients);

/* Opdracht 3: */
// Draai de volgorde van onderstaande array met namen om en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Piet', 'Jan', 'Henk' ]

const names = ['Henk', 'Jan', 'Piet'];
const reversedNames = names.reverse();

console.log(reversedNames);

names.splice(1, 1); // Verwijder het tweede element ('Jan')
names.unshift('Jan'); // Voeg 'Jan' en 'Piet' toe aan het begin van de array
console.log(names);




/* Opdracht 4: */
// Onderstaande array bevat een lijst met plaatsnamen. Voeg de naam "Amsterdam" toe tussen Utrecht en Maastricht.
// ---- Verwachte uitkomst: [ 'Utrecht', 'Amsterdam', 'Maastricht', 'Eindhoven' ]

const cities = ["Utrecht", "Maastricht", "Eindhoven"];

const plaatsnamen = ['Utrecht', 'Maastricht', 'Eindhoven'];
const newPlaats ='Amsterdam'
plaatsnamen.splice(1, 0, newPlaats); // Voeg 'Amsterdam' toe op index 1
console.log(plaatsnamen);




