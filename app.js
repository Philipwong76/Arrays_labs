// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

  return results;
}

let mexicanFood = findMexicanFood();
console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "Vegetarian"
//Filter

function findVegetarian() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Vegetarian") {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let VegetarianFood = findVegetarian();
console.log("Vegetarian: ", VegetarianFood);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function findItalian() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Italian") {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let ItalianFood = findItalian();
console.log("Italian: ", ItalianFood);

//3. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function findIdMatchingServingCount() {
  let results = dishes.filter(function (el) {
    if (el.id === el.servings) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let IdEqualsServingCount = findIdMatchingServingCount();
console.log("Id matching servings count: ", IdEqualsServingCount);

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function findEvenServingCount() {
  let results = dishes.filter(function (el) {
    if (el.servings % 2==0) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let EvenServingCount = findEvenServingCount();
console.log("Even serving count: ", EvenServingCount);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function findTomatoAndCheese() {
  let results = dishes.filter(function (el) {
    if (el.ingredients[0] === "tomato" && el.ingredients[1] ==="cheese") {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let TomatoAndCheese = findTomatoAndCheese();
console.log("Searching only for Tomato and Cheese ingredients: ", TomatoAndCheese);

//6. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

function returnCusineType() {
  let results = dishes.map(function (el) {
    return el.cuisine
  });

  return results;
}

let CusineType = returnCusineType();
console.log("Searching only for cusine types: ", CusineType);


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

function appendCusineType() {
  let results = dishes.map(function (el) {
    return el.name = el.cuisine.concat(' ', el.name)
  });

  return results;
}

let CusineTypeAndName = appendCusineType();
console.log("Searching only for cusine types: ", CusineTypeAndName);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. 
//This function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not need to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

//12. Revisit your solution for Problem 6.  Use the filter method to eliminate duplicate cuisine types, leaving only distinct values in the array.
