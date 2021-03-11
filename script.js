window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
        response.json().then( function(json) {
            console.log(json)
            ;
            let div = document.getElementById("weather-conditions")
            json.windSpeed = 99

            div.innerHTML = ` <ul>
            <li>Temp ${json.temp}</li>
            <li>Wind Speed ${json.windSpeed}</li>
            <li>Status ${json.status}</li>
            <li>Chance of Precip ${json.chanceOfPrecipitation}</li>
         </ul>`



         if (json.temp > 60){
             div.innerHTML += "Temp too high <br />"
         }

         if (json.windSpeed < 50 && json.windSpeed > 2) {
            div.innerHTML += "Windspeed nominal"
         } else {
             div.innerHTML += "Windspeed outside of acceptable range"
         }
         });
    })
})