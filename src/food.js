  function youtubeApi(recipeNameh2) {


    var querUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + recipeNameh2 + "%20recipe&type=video&videoEmbeddable=true&key=AIzaSyBjrSFm54Ngwe4Vz-BRAZVm1EM9wUba0f8"
    fetch(querUrl)
      .then((res) => {
        return res.json()
      }).then((data) => {
        if (data.items.length > 0) {
          var videoId = data.items[0].id.videoId;
          var videoTitle = data.items[0].snippet.title;
          var youtubeLink = "https://www.youtube.com/watch?v=";
          var fullUrl = youtubeLink + videoId;

          displayVideo(fullUrl, videoTitle, videoId)

        } else {
          console.log("no video Found")
        };
      })
    function displayVideo(fullUrl, videoTitle, videoId) {
      var divEl = $(".youtube-vid")
      divEl.empty();

      var youtubeIframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?si=2JU_Yh3oZzQRoA_V" title=${videoTitle} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>`
      var title = $("<h3>").text(videoTitle);
      var vlink = $("<a>").attr("href", fullUrl).text("watch Video");

      divEl.append(title, vlink, youtubeIframe)

    }

  }



  // ADDED SEARCH BUTTON PRESS
  $("form").on("submit", (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const searchQuery = $(".search-bar").val();
    youtubeApi()
    getRecipe(searchQuery); // Passes the searchQuery to getRecipe

  });




  // GET THE RECIPE
  function getRecipe(searchQuery) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
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
            <h2 class="recipeName">${recipeName}</h2>
            <h4>Ingredients:</h4>
            <ul style="padding-left: 20px">${ingredients}</ul>
            <h4>Instructions:</h4>
            <p>${instructions}</p>
        </div>
        <br>
    `;

    recipeSection.append(content);
    var recipeNameh21 = $(".recipeName").text()
    var recipeNameh2 = recipeNameh21 + " recipe"
    console.log(recipeNameh2)
    youtubeApi(recipeNameh2)
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

