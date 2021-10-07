
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  affichage(apiWeather);
}

function actualise(){
  var input = document.getElementById("city-input").value;
  const newapiWeather = new API_WEATHER(input);
  affichage(newapiWeather);

}

function affichage(apiWeather){
  apiWeather
    //.fetchTodayForecast()
    .getThreeDay()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      for( var i= 0; i<4; i++){
      const main = data.list[i].weather[0].main;
      const description = data.list[i].weather[0].description;
      const temp = data.list[i].main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

      // Modifier le DOM
      document.getElementById(`today-forecast-main${i}`).innerHTML = main;
      document.getElementById(`today-forecast-more-info${i}`).innerHTML = description;
      document.getElementById(`icon-weather-container${i}`).innerHTML = icon;
      document.getElementById(`today-forecast-temp${i}`).innerHTML = `${temp}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
