
function getRandomMeal() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res)=>{
      return res.json()
    })
    .then(data => {
      console.log(data);
      // Handle the API response data here
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
}







const dataItems =[
  {
      "kind": "youtube#searchResult",
      "etag": "euKZ7mdj1jDP5G5bE4PTzgMY43o",
      "id": {
          "kind": "youtube#video",
          "videoId": "yeGPkgglBJk"
      },
      "snippet": {
          "publishedAt": "2023-12-21T15:15:08Z",
          "channelId": "UCPvMxy7CQQ3XUcF0sAXUJlg",
          "title": "The BEST Cheesy Lasagna Recipes 🍝🧀 | Aesthetic Baking TikTok Compilations",
          "description": "The BEST Cheesy Lasagna Recipes | Aesthetic Baking TikTok Compilations My Baking Blog: anisacakesandbakes.com My ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/yeGPkgglBJk/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/yeGPkgglBJk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/yeGPkgglBJk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "baking compilations 🤍 ",
          "liveBroadcastContent": "none",
          "publishTime": "2023-12-21T15:15:08Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "9-bNFuOUn16MaoDJDjz5ctci6_A",
      "id": {
          "kind": "youtube#video",
          "videoId": "g3ogYrKABE0"
      },
      "snippet": {
          "publishedAt": "2023-05-25T09:05:15Z",
          "channelId": "UCzrYomXGyR1nxvzAAI6qQbA",
          "title": "Lasagne on a budget ❤️#foodhacks #hacks #diy #foodie #lasagna",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/g3ogYrKABE0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/g3ogYrKABE0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/g3ogYrKABE0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Robyn Douman",
          "liveBroadcastContent": "none",
          "publishTime": "2023-05-25T09:05:15Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "xN6CcYOHNvBfuR55Mv0ygfnirW8",
      "id": {
          "kind": "youtube#video",
          "videoId": "fAu4GbaoyEg"
      },
      "snippet": {
          "publishedAt": "2022-01-14T12:48:19Z",
          "channelId": "UCjz3tesrOA7mg652QYNbTcQ",
          "title": "#Vegan Lentil &amp; Mushroom Lasagne",
          "description": "A delicious veg-packed lasagne. Full recipe here: https://budgetfriendlyvegan.com/easy-vegan-lasagne-recipe/",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/fAu4GbaoyEg/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/fAu4GbaoyEg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/fAu4GbaoyEg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Budget Friendly Vegan",
          "liveBroadcastContent": "none",
          "publishTime": "2022-01-14T12:48:19Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "X6eR0Hsm7PtBX3n41evrbXQXhgE",
      "id": {
          "kind": "youtube#video",
          "videoId": "9vxznjbdfv0"
      },
      "snippet": {
          "publishedAt": "2023-12-20T16:18:41Z",
          "channelId": "UCvlC5Ctzp2z8aCTBPRVDx7g",
          "title": "Lasagne vegane FACILI e DELIZIOSE 🌱",
          "description": "Le lasagne vegane rappresentano una deliziosa e nutriente alternativa sostenibile alle classiche lasagne alla bolognese.",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/9vxznjbdfv0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/9vxznjbdfv0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/9vxznjbdfv0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Ilaria Food and Home",
          "liveBroadcastContent": "none",
          "publishTime": "2023-12-20T16:18:41Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "etag": "-ZoWQ-UFA85MQYEVpHw29tQRglI",
      "id": {
          "kind": "youtube#video",
          "videoId": "7NiwVIPrVRU"
      },
      "snippet": {
          "publishedAt": "2023-03-20T17:47:05Z",
          "channelId": "UCBy23fBwiAs7kPwu-WTgWlw",
          "title": "my first time making lasagne",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/7NiwVIPrVRU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/7NiwVIPrVRU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/7NiwVIPrVRU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "ChrisThe Fish03",
          "liveBroadcastContent": "none",
          "publishTime": "2023-03-20T17:47:05Z"
      }
  }
]
// let data= JSON.parse(dataItems)
console.log(dataItems)
console.log(dataItems[0].snippet)

var search= $("search").val()
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&&order=rating&q="+search+"&type=video&key=AIzaSyAk79jO8CvLdZ_YqsuS1D-8KE9hRawHOfY")
// .then((res)=>{
//     return res.json()
// }) 
// .then((data)=>{
//     console.log(data)
//     var thumbnailUrl= data.items[0].snippet.thumbnails.default.url;

//    console.log(data.items[0].id.videoId)
//    var videoID= data.items[0].id.videoId
//    var youtubeUrl= "https://www.youtube.com/watch?v=g3ogYrKABE0"
//    var url = youtubeUrl+videoID
//    console.log
//    "https://www.youtube.com/watch?v=Z9yaG27quz0"

console.log(dataItems[0].id.videoId)
console.log(dataItems[0].snippet.title)
var title= dataItems[0].snippet.title
var videoId =dataItems[0].id.videoId
var youtubeUrl= "https://www.youtube.com/watch?v="
var fullUrl = youtubeUrl+videoId
var thumbnail= dataItems[0].snippet.thumbnails.default.url


var divEl= $("#player-container")
var title = $("<h1>").text(title)
var image= $("<img>");
var anchorTag = $("<a>");
anchorTag.attr("href",fullUrl).text("hello")
anchorTag.attr("target","_blank")
image.attr("src",thumbnail)
divEl.append(title, image,anchorTag)


// //    step number 1- extract thumbnail url 
// //  1a. create an image element 
// //  2a. add a src att to that image element 
// // 3a. append the image element onto the page 
// // step number2 - Create the video link 
// //  1a. grab the video videoId from the fecth 
// // 2a. create youtube video link / url using line 10
// // 3a. create an anchor tag 
// //  4a. add href to the anchor tag
// // 5a. add text content to that link 
// // append anchor tag to the page 



  
// })


