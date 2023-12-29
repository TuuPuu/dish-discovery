//  ADD TO FAVORITES
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

  // COME BACK TO THIS-modal
  // onload = (event) => {
  //   if (searchQuery === "") {
  //     addToFavorites.addClass("alt-fav-text");
  //   } else addToFavorites.addClass("fav-text");
  // };
});

function displaySavedSearches() {
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

    viewButton.click(function () {
      getRecipe(savedSearches[i]); // passes the searchQuery to getRecipe
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

displaySavedSearches();