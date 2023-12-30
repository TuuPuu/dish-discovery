$(document).ready(function () {
  // ADD TO FAVORITES
  const favoritesList = $("#favoritesList");
  const addToFavorites = $("#addToFavorites");

  addToFavorites.click(function () {
    const searchQuery = $(".search-bar").val();
    const savedSearches =
      JSON.parse(localStorage.getItem("savedSearches")) || [];

    // checks if searchQuery already exists in savedSearches
    if (!savedSearches.includes(searchQuery)) {
      savedSearches.push(searchQuery);
      localStorage.setItem("savedSearches", JSON.stringify(savedSearches));
      displaySavedSearches();
    }
  });

  // Display saved searches on page load
  displaySavedSearches();

  // viewButton.click event handler
  $(".view-button").click(function () {
    const searchQuery = $(this).prev().prev().text();
    const savedRecipe = getSavedRecipe(searchQuery);
    if (savedRecipe) {
      displayRecipe(savedRecipe);
    } else {
      console.log("Saved recipe not found");
    }
  });

  // get recipe data from API
  function getRecipe() {
    console.log("getRecipe called");

    // Get the search query from the input field
    const searchQuery = $(".search-bar").val();

    // Make sure there's a search query before making the API call
    if (searchQuery.trim() !== "") {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      )
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

  // Display saved searches
  function displaySavedSearches() {
    const favoritesList = $("#favoritesList");
    favoritesList.empty();

    // retrieve saved searches from local storage or create an empty array if it doesn't exist
    const savedSearches =
      JSON.parse(localStorage.getItem("savedSearches")) || [];

    // iterate over the indices of the saved searches array
    for (let i = 0; i < savedSearches.length; i++) {
      // Capitalize the first letter of each search query
      const capitalisedQuery = capitaliseFirstLetter(savedSearches[i]);

      // create a div to enclose the list item and buttons
      const listItemContainer = $("<div>").addClass("list-item-container");

      // create list item and buttons
      const listItem = $("<li>").text(capitalisedQuery);
      const removeButton = $("<button>")
        .text("Remove")
        .addClass("remove-button");
      const viewButton = $("<button>").text("View").addClass("view-button");

      // add click event listeners to buttons
      removeButton.click(function () {
        removeSearch(savedSearches[i]);
      });

      // append buttons to list item container
      listItemContainer.append(listItem, viewButton, removeButton);

      // append the list item container to the favoritesList
      favoritesList.append(listItemContainer);
    }
  }

  // function to capitalise the first letter of a string
  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // REMOVE FROM FAVOURITE
  function removeSearch(searchQuery) {
    const savedSearches =
      JSON.parse(localStorage.getItem("savedSearches")) || [];

    const updatedSearches = [];

    for (let i = 0; i < savedSearches.length; i++) {
      if (savedSearches[i] !== searchQuery) {
        updatedSearches.push(savedSearches[i]);
      }
    }

    localStorage.setItem("savedSearches", JSON.stringify(updatedSearches));

    displaySavedSearches();
  }

  // viewButton.click event handler
  // $(".view-button").click(function () {
  //   const searchQuery = $(this).prev().prev().text();
  //   const savedRecipe = getSavedRecipe(searchQuery);
  //   if (savedRecipe) {
  //     displayRecipe(savedRecipe);
  //   } else {
  //     console.log("Saved recipe not found");
  //   }
  // });

  // Add a new function to retrieve the saved recipe by search query
  function getSavedRecipe(searchQuery) {
    // Retrieve saved recipes from local storage
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    // Find the saved recipe with the matching search query
    const savedRecipe = savedRecipes.find(
      (recipe) => recipe.searchQuery === searchQuery
    );

    return savedRecipe;
    $(".view-button").click(function () {
      const searchQuery = $(this).prev().prev().text();
      const savedRecipe = getSavedRecipe(searchQuery);
      if (savedRecipe) {
        displayRecipe(savedRecipe);
      } else {
        console.log("Saved recipe not found");
      }
    });
  }
});
