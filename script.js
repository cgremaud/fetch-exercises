window.addEventListener("load", () => {
    fetch("./data.json").then(function(response) {
        response.json().then( function(json) {
            console.log(json)

            let div = document.getElementById("weather-conditions")
            let goForLaunch = false
            
            json.windSpeed = 99


            div.innerHTML = ` <ul>
            <li>Temp ${json.temp}</li>
            <li>Wind Speed ${json.windSpeed}</li>
            <li>Status ${json.status}</li>
            <li>Chance of Precip ${json.chanceOfPrecipitation}</li>
            <li>Zip Code ${json.zipcode}</li>
         </ul>`



         if (json.temp > 67){
             div.innerHTML += "Temp too high <br />"
             goForLaunch = true
             console.log(goForLaunch)
         } else { 
             div.innerHTML += "Temp nominal <br />"
             goForLaunch = false
         }

         if (json.windSpeed < 50 && json.windSpeed > 2) {
            div.innerHTML += "Windspeed nominal<br />"
            goForLaunch = true
         } else {
             div.innerHTML += "Windspeed outside of acceptable range<br />"
             goForLaunch = false
         }

         div.innerHTML += `Go For Launch: ${goForLaunch}`
         }); 
    })
})