const toys = [
    {
        id: 1,
        name: "Legos",
        maker: "The Lego Group",
        price: 100,
        weight: 10
    },
    {
        id: 2,
        name: "Monopoly",
        maker: "Hasbro",
        price: 25,
        weight: 5
    },
    {
        id: 3,
        name: "Rubik's Cube",
        maker: "Rubik's Brand Ltd",
        price: 8,
        weight: 1.2
    }
];


const pokemon = {
    // id: 4,
    name: "Pokemon cards",
    maker: "Nintendo",
    // price: 20,
    weight: 1.1
};

const xbox = {
    // id: 5,
    name: "Xbox",
    maker: "Microsoft",
    // price: 400,
    weight: 10
}
// MAKE A NEW EMPTY MAP
const toyMap = new Map()
const toySet = new Set()

// WRITE A FUNCTION THAT WILL ADD A NEW TOY (passed in as an argument) TO THE ARRAY
const addToyToInventory = (toyObject, price) => {

    // GET INDEX OF LAST ITEM IN ARRAY
    const lastIndex = toys.length - 1;

    // GET THE LAST OBJECT IN THE ARRAY
    const currentLastToy = toys[lastIndex];

    // GET id PROPERTY VALUE OF LAST TOY
    const maxId = currentLastToy.id;

    // INCREASE THE CURRENT maxId BY 1
    const idForNewToy = maxId + 1;

    // ADD THE id PROPERTY TO THE TOY OBJECT
    toyObject.id = idForNewToy

    // PUSH THE TOY OBJECT TO THE ARRAY
    toys.push(toyObject)

    // ADD THE KEY, VALUE PAIRS INTO THE NEW MAP WITH .set
    // ADD THE KEY, VALUE PAIRS INTO THE NEW SET WITH .add
    toyMap.set(toyObject, price)
    toySet.add(toyObject)
    console.log(toyMap)
};



// CALL THE FUNCTION AND PASS IN A NEW TOY OBJECT AS AN ARGUEMENT TO ADD IT TO THE TOYS ARRAY // AND THE NEW MAP
// addToyToInventory(pokemon);
// addToyToInventory(xbox);
// addToyToInventory(xbox);
// console.log(toySet)
// console.log(toys)

addToyToInventory(pokemon, 7.00);
addToyToInventory(xbox, 200.00);

// LOOP THROUGH THE NEW toyMap AND LOG THE OBJECT NAME AND PRICE INTO THE CONSOLE
// for (let [toyObj, price] of toyMap) {
//     console.log(`The ${toyObj.name} is $${price}`)
// }


// toys.push(pokemon)
// toys.push(xbox)

// console.log(toys)
// // ORIGINAL LOG
// for (const toy of toys) {
//     console.log(`The price of ${toy.name} is $${toy.price} and it is made by ${toy.maker}`)
// };

// PRICE INCREASED ON ALL TOYS BY 5%
// for (const toy of toys) {
//     toy.price += toy.price * 0.05
//     console.log(`The price of ${toy.name} is $${toy.price} and it is made by ${toy.maker}`)
// };

// DISCONTINUED TOYS    

const removeProduct = (selectId) => {
    // find the index of the toy whos id equals the value of the parameter
    for (const toyObj of toys) {
        if (toyObj.id === selectId) {
            // use that index with .splice() on the toy array to remove that item
            const toyObjIndex = toys.indexOf(toyObj)
            toys.splice(toyObjIndex, 1)
        }
    }
    return toys
}
const newToys = removeProduct(3)
// console.log(newToys)

// THE PERRY SCOPE

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of currentInventory) {
        let availableForPurchase = false
        if (toy === "Perry Scope") {
            availableForPurchase = true
            console.log("Enjoy your new Perry Scope😊")
        // } else {
        //     console.log("We are out of Perry Scopes😟")
        }
    }
}

// sellPerryScope()
