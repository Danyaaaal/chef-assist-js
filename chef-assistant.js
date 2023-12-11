// Import the 'readline-sync' library for user input
import rs from "readline-sync";
import chalk from "chalk";
import { consola } from "consola";
const yellow = chalk.hex("#ffdd00");
const red = chalk.hex("#ff4400");
// Define an array of breakfast recipes with names and ingredients
let breakfastRecipes = [
  // ... (your breakfast recipes)
  {
    name: "Boiled egg sandwich ",
    ingredients: ["egg 🥚", "bread 🥖", "tomato 🍅", "butter 🧈"],
  },
  {
    name: "Fried egg with bread ",
    ingredients: ["egg 🥚", "bread 🥖", "butter 🧈"],
  },
  {
    name: "Egg and bacon",
    ingredients: ["egg 🥚", "bacon 🥓", "bread 🥖"],
  },
  {
    name: "French Toast",
    ingredients: ["egg 🥚", "toast 🍞", "milk 🥛", "butter 🧈", "jam 🍧"],
  },
  {
    name: "Bowl of milk and cereal",
    ingredients: ["cereal 🥣", "milk 🥛"],
  },
  {
    name: "Bowl of Milk with Corn Flakes",
    ingredients: ["milk 🥛", "corn flakes 🌽"],
  },
  {
    name: "Fruity Milk Shake",
    ingredients: ["fruit 🍓", "milk 🥛", "sugar 🍚"],
  },
  {
    name: "Cheese Omelette",
    ingredients: ["egg 🥚", "cheese 🧀", "bread 🥖"],
  },
  {
    name: "Tomato Omelette with bread",
    ingredients: ["egg 🥚", "tomato 🍅", "bread 🥖"],
  },
  {
    name: "Bowl of Yogurt and Fruit",
    ingredients: ["yogurt 🥡", "fruit 🍓"],
  },
  {
    name: "Bowl of Yogurt with Cereal and Fruit",
    ingredients: ["yogurt 🥡", "fruit 🍓", "cereal 🥣"],
  },
  {
    name: "Egg and Sausage with bread",
    ingredients: ["egg 🥚", "sausage 🌭", "bread 🥖"],
  },
  {
    name: "Normal Breakfast with Toast or bread",
    ingredients: [
      "cheese 🧀",
      "butter 🧈",
      "jam 🍧",
      "honey 🍯",
      "bread 🥖",
      "toast 🍞",
    ],
  },
];

// Define an array of lunch recipes with names and ingredients
let lunchRecipes = [
  // ... (your lunch recipes)
  {
    name: "burger",
    ingredients: [
      "mince meat 🥩",
      "onion 🧅",
      "bread 🥖",
      "cheese 🧀",
      "tomato 🍅",
    ],
  },
  {
    name: "spaghetti bolognese",
    ingredients: ["pasta 🍝", "mince meat 🥩", "tomato 🍅", "cheese 🧀"],
  },
  {
    name: "tunafish sandwich",
    ingredients: ["tuna 🐟", "bread 🥖", "onion 🧅", "tomato 🍅"],
  },
  {
    name: "rice with chicken",
    ingredients: ["rice 🍚", "chicken 🍗", "tomato 🍅"],
  },
  {
    name: "chicken alfredo",
    ingredients: ["chicken 🍗", "pasta 🍝", "cheese 🧀", "onion 🧅"],
  },
  {
    name: "rice with kebab",
    ingredients: ["mince meat 🥩", "rice 🍚", "onion 🧅", "tomato 🍅"],
  },
  {
    name: "ham sandwich",
    ingredients: ["ham 🍖", "bread 🥖", "tomato 🍅", "cheese 🧀"],
  },
  {
    name: "fish and rice",
    ingredients: ["fish 🐠", "rice 🍚"],
  },
  {
    name: "steamed rice with roasted onion and tomato (vegan)",
    ingredients: ["rice 🍚", "onion 🧅", "tomato 🍅", "potato 🥔"],
  },
  {
    name: "chicken steak with mashed potato",
    ingredients: ["chicken 🍗", "potato 🥔"],
  },
];

// Define an object that maps meal types to arrays of possible ingredients
const ingredientOptions = {
  breakfast: [
    // ... (breakfast ingredients)
    "egg 🥚",
    "milk 🥛",
    "bread 🥖",
    "toast 🍞",
    "tomato 🍅",
    "butter 🧈",
    "cheese 🧀",
    "cereal 🥣",
    "yogurt 🥡",
    "fruit 🍓",
    "bacon 🥓",
    "sausage 🌭",
    "sugar 🍚",
    "jam 🍧",
    "honey 🍯",
    "corn flakes 🌽",
  ],
  lunch: [
    // ... (lunch ingredients)
    "rice 🍚",
    "pasta 🍝",
    "ham 🍖",
    "mince meat 🥩",
    "chicken 🍗",
    "fish 🐠",
    "potato 🥔",
    "cheese 🧀",
    "tomato 🍅",
    "onion 🧅",
    "tuna 🐟",
    "bread 🥖",
  ],
};

// Function to find lunch recipes based on user-selected ingredients
function findRecipesLunch(userIngredients) {
  return lunchRecipes.filter((recipe) =>
    recipe.ingredients.every((ingredient) =>
      userIngredients.includes(ingredient)
    )
  );
}

// Function to find breakfast recipes based on user-selected ingredients
function findRecipesBreakfast(userIngredients) {
  return breakfastRecipes.filter((recipe) =>
    recipe.ingredients.every((ingredient) =>
      userIngredients.includes(ingredient)
    )
  );
}
// Function to get the user's choice of breakfast or lunch
function getUserMealChoice() {
  console.clear(); // Clear the console when the code is run
  console.log(chalk.bgGreen("Welcome to the Meal Suggestion Program!"));
  console.log("--------------------------------------");

  let userInput;

  // Keep prompting until a valid choice is entered (1 or 2)
  do {
    console.log("Which meal would you like to have?\n");
    console.log(yellow("1. Breakfast 🍳\n"));
    console.log(red("2. Lunch 🍔\n"));

    // Get user input for meal choice
    userInput = rs.questionInt(
      "Enter the number corresponding to your choice: "
    );

    if (userInput !== 1 && userInput !== 2) {
      consola.error(
        "Please select a valid option (1 for Breakfast, 2 for Lunch)."
      );
    }
  } while (userInput !== 1 && userInput !== 2);

  // Return "breakfast" or "lunch" based on the user's choice
  return userInput === 1 ? "breakfast" : "lunch";
}

// Function to get the user's selected ingredients
function getUserIngredients(mealChoice) {
  console.log(
    chalk.bgCyanBright(
      `\nPlease select the ingredients you have for ${mealChoice}:`
    )
  );
  console.log(
    chalk.green("-----------------------------------------------------")
  );
  console.log();
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
    console.log();
    userInput = rs.question(
      consola.info(
        "Enter the number of ingredients that you have  (e.g. 1,3,5):"
      )
    );

    // Convert selected numbers to an array of indices
    selectedIndices = userInput
      .split(",")
      .map((num) => parseInt(num.trim()) - 1);
      selectedIndices = [...new Set(selectedIndices)];
    // Check if all selected indices are valid
    validInput = selectedIndices.every(
      (index) => index >= 0 && index < ingredientOptions[mealChoice].length
    );
    console.clear();
    if (!validInput) {
      consola.error("Please enter valid numbers from the menu.");
      console.log(
        // Display a menu of ingredient options for the chosen meal type
        ingredientOptions[mealChoice]
          .map((ingredient, index) => `${index + 1}. ${ingredient}`)
          .join("\n")
      );
    }

    // Check if the minimum number of ingredients is met
    if (validInput && selectedIndices.length < 2) {
      consola.warn("Please choose at least 2 or more ingredients.");
      validInput = false;
      console.log(
        // Display a menu of ingredient options for the chosen meal type
        ingredientOptions[mealChoice]
          .map((ingredient, index) => `${index + 1}. ${ingredient}`)
          .join("\n")
      );
    }
  } while (!validInput);

  // Return an array of selected ingredients based on indices
  return selectedIndices.map((index) => ingredientOptions[mealChoice][index]);
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
      console.log(selectedIngredients);
      const matchingRecipes = findRecipesBreakfast(selectedIngredients);

      if (matchingRecipes.length > 0) {
        console.clear();
        console.log(selectedIngredients);
        console.log(
          yellow(
            "\nHere are some menus for breakfast based on your ingredients:"
          )
        );
        console.log(
          red("------------------------------------------------------------")
        );
        matchingRecipes.forEach((recipe) => {
          consola.box(
            `${recipe.name} - Ingredients: ${recipe.ingredients.join(", ")}`
          );
        });
      } else {
        console.log("No matching recipes found.");
      }
    } else {
      console.log(selectedIngredients);
      const matchingRecipes = findRecipesLunch(selectedIngredients);

      if (matchingRecipes.length > 0) {
        console.clear();
        console.log(selectedIngredients);
        console.log(
          red("\nHere are some menus for lunch based on your ingredients:")
        );
        console.log(
          chalk.yellow(
            "--------------------------------------------------------"
          )
        );
        matchingRecipes.forEach((recipe) => {
          consola.box(
            `${recipe.name} - Ingredients: ${recipe.ingredients.join(", ")}`
          );
        });
      } else {
        console.log("No matching recipes found.");
      }
    }
  }
}
