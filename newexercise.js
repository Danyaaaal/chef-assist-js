let breakfastRecipes = [
  {
    name: "Fried egg with bread",
    ingredients: ["egg", "bread"],
  },
  {
    name: "Egg and bacon",
    ingredients: ["egg", "bacon", "bread"],
  },
  {
    name: "French Toast",
    ingredients: ["egg", "toast", "milk", "butter", "jam"],
  },
  {
    name: "Bowl of milk and cereal",
    ingredients: ["cereal", "milk"],
  },
  {
    name: "Bowl of Milk with Corn Flakes",
    ingredients: ["milk", "corn flakes"],
  },
  {
    name: "Fruit Shake",
    ingredients: ["fruit", "milk", "sugar"],
  },
  {
    name: "Fruit Smoothie",
    ingredients: ["fruit"],
  },
  {
    name: "Tomato Omelette with bread",
    ingredients: ["egg", "tomato", "bread"],
  },
  {
    name: "Bowl of Yogurt and Fruit",
    ingredients: ["yogurt", "fruit"]
  },
  {
    name: "Bowl of Yogurt with Cereal and Fruit",
    ingredients: ["yogurt","fruit", "cereal"]
  },
  {
    name: "Egg and Sausage with bread",
    ingredients: ["egg","sausage","bread"]
  },
  {
    name: "Normal Breakfast with Toast or bread",
    ingredients: ["cheese","butter","jam","honey","bread","toast"]
  },
];

function findMatchingRecipes(availableIngredients, recipes) {
  const matchingRecipes = recipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients;
    return availableIngredients.every(ingredient => recipeIngredients.includes(ingredient)) &&
           recipeIngredients.every(ingredient => availableIngredients.includes(ingredient));
  });

  return matchingRecipes;
}

let myIngredients = ["egg", "bread", "tomato,"];

let matchingRecipes = findMatchingRecipes(myIngredients, breakfastRecipes);

console.log("Matching Recipes:");
matchingRecipes.forEach(recipe => {
  console.log(recipe.name);
});
