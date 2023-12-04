// Import the 'readline-sync' library for user input
import rs from "readline-sync";

// Define an array of breakfast recipes with names and ingredients
let breakfastRecipes = [
  // ... (your breakfast recipes)
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
    ingredients: ["yogurt", "fruit"],
  },
  {
    name: "Bowl of Yogurt with Cereal and Fruit",
    ingredients: ["yogurt", "fruit", "cereal"],
  },
  {
    name: "Egg and Sausage with bread",
    ingredients: ["egg", "sausage", "bread"],
  },
  {
    name: "Normal Breakfast with Toast or bread",
    ingredients: ["cheese", "butter", "jam", "honey", "bread", "toast"],
  },
];

// Define an array of lunch recipes with names and ingredients
let lunchRecipes = [
  // ... (your lunch recipes)
  {
    name: "burger",
    ingredients: ["mince meat", "onion", "bread", "cheese", "tomato"],
  },
  {
    name: "spaghetti bolognese",
    ingredients: ["pasta", "mince meat", "tomato", "cheese"],
  },
  {
    name: "tunafish sandwich",
    ingredients: ["tuna", "bread", "onion"],
  },
  {
    name: "rice with chiken",
    ingredients: ["rice", "chicken","tomato"],
  },
  {
    name: "chicken alfredo",
    ingredients: ["chicken", "pasta", "cheese", "onion"],
  },
  {
    name: "rice with kebab",
    ingredients: ["mince meat", "rice", "onion", "tomato"],
  },
  {
    name: "ham sandwich",
    ingredients: ["ham","bread","tomato","cheese"],
  },
  {
    name: "fish and rice",
    ingredients: ["fish", "rice"],
  },
  {
    name: "steamed rice eith rosted onino and tomato (vegan)",
    ingredients: ["rice", "onion","tomato","potato"],
  },
  {
    name: "chicken steak with mashed potato",
    ingredients: ["chicken", "potato",],
  },
];

// Define an object that maps meal types to arrays of possible ingredients
const ingredientOptions = {
  breakfast: [
    // ... (breakfast ingredients)
    "egg", "milk", "bread", "cereal", "yogurt", "fruit", "bacon", "sausage",
    "butter", "cheese", "sugar", "jam", "honey", "corn flakes", "tomato", "toast",
  ],
  lunch: [
    // ... (lunch ingredients)
    "rice", "pasta", "ham", "mince meat", "chicken", "fish", "potato", "cheese",
    "tomato", "onion", "tuna", "bread",
  ],
};

// Function to suggest meal options based on selected ingredients
function suggestMealOptions(selectedIngredients, recipes) {
  console.log("\nHere are some meal suggestions based on your ingredients:");
  console.log("--------------------------------------------------------");

  // Filter recipes based on selected ingredients
  const matchingRecipes = recipes.filter((recipe) => {
    if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
      // Check if any selected ingredient is in the recipe (case-insensitive)
      return selectedIngredients.some((ingredient) =>
        recipe.ingredients.some((recipeIngredient) =>
          recipeIngredient.toLowerCase().trim() === ingredient.toLowerCase().trim()
        )
      );
    }
    return false;
  });

  // Display matching recipes or a message if none found
  if (matchingRecipes.length > 0) {
    matchingRecipes.forEach((recipe) => {
      console.log(`${recipe.name}: ${recipe.ingredients.join(", ")}`);
    });
  } else {
    console.log("Sorry, no matching recipes found with the selected ingredients.");
  }
}

// Function to get the user's choice of breakfast or lunch
function getUserMealChoice() {
  console.clear(); // Clear the console when the code is run
  console.log("Welcome to the Meal Suggestion Program!");
  console.log("--------------------------------------");

  let userInput;

  // Keep prompting until a valid choice is entered (1 or 2)
  do {
    console.log("Which meal would you like to have?");
    console.log("1. Breakfast");
    console.log("2. Lunch");

    // Get user input for meal choice
    userInput = rs.questionInt("Enter the number corresponding to your choice: ");

    if (userInput !== 1 && userInput !== 2) {
      console.log("Please select a valid option (1 for Breakfast, 2 for Lunch).");
    }
  } while (userInput !== 1 && userInput !== 2);

  // Return "breakfast" or "lunch" based on the user's choice
  return userInput === 1 ? "breakfast" : "lunch";
}

// Function to get the user's selected ingredients
function getUserIngredients(mealChoice) {
  console.log(`\nPlease select the ingredients you have for ${mealChoice}:`);
  console.log("--------------------------------------------------------");
  console.log(
    // Display a menu of ingredient options for the chosen meal type
    ingredientOptions[mealChoice]
      .map((ingredient, index) => `${index + 1}. ${ingredient}`)
      .join("\n")
  );

  let userInput;
  let validInput = false;

  // Declare selectedIndices outside the do-while loop
  let selectedIndices;

  // Keep prompting until valid ingredient numbers are entered
  do {
    // Get user input for selected ingredient numbers
    userInput = rs.question("Enter numbers (e.g., 1, 3, 5):");

    // Convert selected numbers to an array of indices
    selectedIndices = userInput
      .split(",")
      .map((num) => parseInt(num.trim()) - 1);

    // Check if all selected indices are valid
    validInput = selectedIndices.every(
      (index) =>
        index >= 0 && index < ingredientOptions[mealChoice].length
    );

    if (!validInput) {
      console.log("Please enter valid numbers from the menu.");
    }
  } while (!validInput);

  // Return an array of selected ingredients based on indices
  return selectedIndices.map(
    (index) => ingredientOptions[mealChoice][index]
  );
}

// Get the user's choice of breakfast or lunch
const mealChoice = getUserMealChoice();

// Check if the user chose breakfast or lunch
if (mealChoice === "breakfast" || mealChoice === "lunch") {
  // Get the user's selected ingredients
  const selectedIngredients = getUserIngredients(mealChoice);

  // Check if any ingredients were selected
  if (selectedIngredients.length > 0) {
    // Call the appropriate function to suggest meal options
    if (mealChoice === "breakfast") {
      suggestMealOptions(selectedIngredients, breakfastRecipes);
    } else {
      suggestMealOptions(selectedIngredients, lunchRecipes);
    }
  } else {
    console.log("Sorry, you did not select any ingredients.");
  }
} else {
  console.log("Invalid meal choice. Exiting.");
}
