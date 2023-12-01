import rs from "readline-sync";

function getUserMealChoice() {
  console.log("Which meal would you like to have?");
  console.log("1. Breakfast");
  console.log("2. Lunch");

  const userInput = rs.questionInt('Enter the number corresponding to your choice: ');

  if (userInput === 1) {
    return 'breakfast';
  } else if (userInput === 2) {
    return 'lunch';
  } else {
    console.log('Invalid choice. Exiting.');
    process.exit();
  }
}

function getUserIngredients(mealChoice) {
  console.log(`Please select the ingredients you have for ${mealChoice}:`);
  const ingredientOptions = {
    breakfast: ['eggs', 'milk', 'bread', 'cereal', 'yogurt', 'fruit', 'bacon', 'sausage', 'butter', 'cheese', 'sugar', 'jam', 'honey', 'corn flakes', 'tomato', 'toast'],
    lunch: ['rice', 'pasta', 'lettuce', 'ham', 'mince meat', 'chicken', 'fish', 'potato', 'cheese', 'tomato', 'onion', 'tuna']
  };

  console.log(`Select the numbers of the ingredients you have, separated by commas:`);
  console.log(ingredientOptions[mealChoice].map((ingredient, index) => `${index + 1}. ${ingredient}`).join('\n'));

  const userInput = rs.question('Enter numbers (e.g., 1, 3, 5):');
  const selectedIndices = userInput.split(',').map(num => parseInt(num.trim()) - 1);

  // Validate user input
  if (!selectedIndices.every(index => index >= 0 && index < ingredientOptions[mealChoice].length)) {
    console.log('Invalid ingredient numbers. Exiting.');
    process.exit();
  }

  return selectedIndices.map(index => ingredientOptions[mealChoice][index]);
}

function suggestMealOptions(selectedIngredients) {
  console.log(`Based on your ingredients (${selectedIngredients.join(', ')}), here are some meal suggestions:`);
  
  const breakfastMenu = {
    'egg+bread': 'Fried Egg with bread or Boiled egg sandwich',
    'egg+bacon+bread': 'Egg and Bacon with bread',
    'egg+toast+milk+butter+jam': 'French Toast',
    'milk+cereal': 'Cereal with Milk',
    'milk+corn flakes': 'Corn Flakes with Milk',
    'fruit+milk+sugar': 'Fruit Shake',
    'fruit': 'Fruit Smoothie',
    'egg+tomato+bread': 'Tomato Omelette with bread',
    'yogurt+fruit': 'Yogurt and Fruit',
    'yogurt+fruit+cereal': 'Cereal with Yogurt and Fruit',
    'egg+sausage+bread': 'Egg and Sausage with bread',
    'cheese+butter+jam+honey+bread+toast': 'Normal Breakfast with Toast',
  };

  const matchingOptions = Object.keys(breakfastMenu).filter(option => {
    const optionIngredients = option.split('+');
    return selectedIngredients.every(ingredient => optionIngredients.includes(ingredient));
  });

  if (matchingOptions.length > 0) {
    matchingOptions.forEach(option => console.log(`- ${breakfastMenu[option]}`));
  } else {
    console.log('No matching meal suggestions found.');
  }
}

const mealChoice = getUserMealChoice();

if (mealChoice === 'breakfast' || mealChoice === 'lunch') {
  const selectedIngredients = getUserIngredients(mealChoice);

  if (selectedIngredients.length > 0) {
    suggestMealOptions(selectedIngredients);
  } else {
    console.log('Sorry, you did not select any ingredients.');
  }
} else {
  console.log('Invalid meal choice. Exiting.');
}
