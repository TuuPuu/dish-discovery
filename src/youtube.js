// YOUTUBE FETCH
$("form").on("submit", function (e) {
  e.preventDefault();
  var search = $(".search-bar").val();
  var searchRecipe = search + " recipe";
  console.log(searchRecipe);
  var querUrl =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" +
    searchRecipe +
    "%20recipe&type=video&videoEmbeddable=true&key=AIzaSyBjrSFm54Ngwe4Vz-BRAZVm1EM9wUba0f8";
  fetch(querUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.items.length > 0) {
        console.log("found");
        var videoId = data.items[0].id.videoId;
        var videoTitle = data.items[0].snippet.title;
        var thumbnailUrl = data.items[0].snippet.thumbnails.default.url;
        var youtubeLink = "https://www.youtube.com/watch?v=";
        var fullUrl = youtubeLink + videoId;
        displayVideo(fullUrl, videoTitle, thumbnailUrl, videoId);
      } else {
        console.log("no video Found");
      }
    });

  function displayVideo(fullUrl, videoTitle, thumbnailUrl, videoId) {
    var divEl = $(".youtube-vid");
    divEl.empty();

    var youtubeIframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?si=2JU_Yh3oZzQRoA_V" title=${videoTitle} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>`;
    var title = $("<h1>").text(videoTitle);
    var image = $("<img>").attr("src", thumbnailUrl);
    var vlink = $("<a>").attr("href", fullUrl).text("watch Video");

    divEl.append(title, image, vlink, youtubeIframe);
  }
});
