
// function getRandomMeal() {
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // Handle the API response data here
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }


$("form").on("submit", function (e){
  e.preventDefault()
  var search = $(".search-bar").val();
  var searchRecipe = search + " recipe";
  console.log(searchRecipe)
  var querUrl= "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q="+searchRecipe+"%20recipe&type=video&videoEmbeddable=true&key=AIzaSyBjrSFm54Ngwe4Vz-BRAZVm1EM9wUba0f8"
  fetch(querUrl)
  .then((res)=>{
      return res.json()
  }).then((data)=>{
      if (data.items.length > 0) {
        console.log("found")
          var videoId = data.items[0].id.videoId;
          var videoTitle = data.items[0].snippet.title;
          var thumbnailUrl = data.items[0].snippet.thumbnails.default.url;
          var youtubeLink = "https://www.youtube.com/watch?v=";
          var fullUrl = youtubeLink + videoId;
          displayVideo(fullUrl,videoTitle,thumbnailUrl,videoId)
      }else {
          console.log("no video Found")
      };
  })
  function displayVideo(fullUrl, videoTitle,thumbnailUrl,videoId){
      var divEl = $(".youtube-vid")
      divEl.empty();

      var youtubeIframe= `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?si=2JU_Yh3oZzQRoA_V" title=${videoTitle} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>`
      var title= $("<h1>").text(videoTitle);
      var image = $("<img>").attr("src",thumbnailUrl);
      var vlink = $("<a>").attr("href",fullUrl).text("watch Video");

      divEl.append(title,image,vlink,youtubeIframe)
//get recipe data from API
    
function getRecipe() {
    const searchQuery = $('.search-bar').val();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.meals) {
          displayRecipe(data.meals[0]);
        } else {
          console.log('Meal not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Display recipe
  function displayRecipe(data) {
    const recipeSection = $('.recipe-detail');
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
    return ingredientsArray.join('');
  }
  
  
  // Enter keypress for search input
  $('.search-bar').on('keydown', function (e) {
    if (e.key === 'Enter') {
      // 'Enter' key pressed
      e.preventDefault(); // Prevent the default behavior (form submission)
      getRecipe();
    }
  });

  }
})


