

// VARIABLES
let favoritesList = $("#favoritesList");
let addToFavorites = $("#addToFavorites");

  // Load Favourites
  displayFavouritesList();

// ADD TO FAVS
addToFavorites.click(function () {
  const searchQuery = $(".search-bar").val();
  const savedSearches = JSON.parse(localStorage.getItem("savedSearches")) || [];

  if(searchQuery===""){
    console.log("favourite item cannot be empty")
    return
  }
  // checks if searchQuery already exists in savedSearches
  if (!savedSearches.includes(searchQuery)) {
    console.log(`Add new favourite item. item=${searchQuery}`);

    savedSearches.push(searchQuery);
    localStorage.setItem("savedSearches", JSON.stringify(savedSearches));
    displayFavouritesList();

  } else {
    console.log(`Favourite item already exists. item=${searchQuery}`);
  }
});

// DISPLAY SAVED SEARCHES
function displayFavouritesList() {

  favoritesList.empty();

  // retrieve saved searches from local storage or create an empty array if it doesn't exist
  const savedSearches = JSON.parse(localStorage.getItem("savedSearches")) || [];

  // iterate over the indices of the saved searches array
  for (let i = 0; i < savedSearches.length; i++) {
    // Capitalize the first letter of each search query
    const capitalisedQuery = capitaliseFirstLetter(savedSearches[i]);

    // create a div to enclose the list item and buttons
    const listItemContainer = $("<div>").addClass("list-item-container");

    // create list item and buttons
    const listItem = $("<li>").text(capitalisedQuery);
    const removeButton = $("<button>").text("Remove").addClass("remove-button");
    const viewButton = $("<button>").text("View").addClass("view-button");

    // add click event listeners to buttons
    removeButton.click(function () {
      removeSearch(savedSearches[i]);
    });

    viewButton.click(function () {
      $(".search-bar").val(savedSearches[i])
      getRecipe(savedSearches[i]); // passes the searchQuery to getRecipe
    });

    // append buttons to list item container
    listItemContainer.append(listItem, viewButton, removeButton);

    // append the list item container to the favoritesList
    favoritesList.append(listItemContainer);
  }
}

// CAPITALISE FIRST LETTER
function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// REMOVE FROM FAVOURITE
function removeSearch(searchQuery) {
  const savedSearches = JSON.parse(localStorage.getItem("savedSearches")) || [];

  const updatedSearches = [];

  for (let i = 0; i < savedSearches.length; i++) {
    if (savedSearches[i] !== searchQuery) {
      updatedSearches.push(savedSearches[i]);
    }
  }

  localStorage.setItem("savedSearches", JSON.stringify(updatedSearches));

  displayFavouritesList();
}
