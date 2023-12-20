
function getRandomMeal() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the API response data here
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
