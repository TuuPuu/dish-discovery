// GET THE RECIPE
function getRecipe(searchQuery) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.meals) {
        displayRecipe(data.meals[0]);
      } else {
        console.log("Meal not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// ADDED SEARCH BUTTON PRESS
$("form").submit(function (e) {
  e.preventDefault(); // Prevents the default form submission behavior
  const searchQuery = $(".search-bar").val();
  getRecipe(searchQuery); // Passes the searchQuery to getRecipe
});

// ADDED ENTER KEY PRESS
$(".search-bar").on("keydown", function (e) {
  if (e.key === "Enter") {
    // 'Enter' key pressed
    e.preventDefault(); // Prevents the default form submission behaviour
    const searchQuery = $(".search-bar").val();
    getRecipe(searchQuery); // Passes the searchQuery to getRecipe
  }
});

// DISPLAY RECIPE
function displayRecipe(data) {
  const recipeSection = $(".recipe-detail");
  recipeSection.empty(); // this is here to clear previous content

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

// GET INGREDIENTS ARRAY
function getIngredientsArray(data) {
  const ingredientsArray = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    if (ingredient) {
      const measure = data[`strMeasure${i}`];
      ingredientsArray.push(`<li>${measure} ${ingredient}</li>`);
    } else {
      break; // Stops loop if there are no more ingredients
    }
  }
  return ingredientsArray.join("");
}
