$(document).ready(function () {
  // Call getRecipe when the form is submitted
  $("form").on("submit", function (e) {
    e.preventDefault();
    getRecipe();
  });
});

// get recipe data from API
function getRecipe() {
  console.log("getRecipe called");

  // Get the search query from the input field
  const searchQuery = $(".search-bar").val();

  // Make sure there's a search query before making the API call
  if (searchQuery.trim() !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.meals) {
          displayRecipe(data.meals[0]);
        } else {
          console.log("Meal not found");
          // You might want to display a message indicating that the meal was not found
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., display an error message to the user
      });
  } else {
    // Handle the case where the search query is empty
    console.log("Empty search query");
    // You might want to display a message indicating that the search query is empty
  }
}

// Display recipe
function displayRecipe(data) {
  const recipeSection = $(".recipe-detail");
  recipeSection.empty(); // Clear previous content

  const recipeName = data.strMeal;
  const MealThumb = data.strMealThumb;
  const ingredients = getIngredientsArray(data);
  const instructions = data.strInstructions;

  const content = `
      <div class="p-4">
        <img src="${MealThumb}" alt="${recipeName}" class="img-fluid" style="max-width: 100%; height: auto;">
        <h2>${recipeName}</h2>
        <h4>Ingredients:</h4>
        <ul style="padding-left: 20px">${ingredients}</ul>
        <h4>Instructions:</h4>
        <p>${instructions}</p>
      </div>
      <br>
  `;

  recipeSection.append(content);
}

// Get ingredients array
function getIngredientsArray(data) {
  console.log("Running here");
  const ingredientsArray = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    if (ingredient) {
      const measure = data[`strMeasure${i}`];
      ingredientsArray.push(`<li>${measure} ${ingredient}</li>`);
    } else {
      break; // Stop if there are no more ingredients
    }
  }
  return ingredientsArray.join("");
}

$(document).ready(function () {
  // Call getRecipe when the form is submitted
  $("form").on("submit", function (e) {
    e.preventDefault();
    getRecipe();
  });
});
