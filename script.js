window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/weather.json").then((response) => {
            response.json().then((json) => {
                console.log(json);

                let div = document.getElementById("weather-conditions");
                let goForLaunch = false;

                div.innerHTML = ` <ul>
            <li>Temp ${json.temp}</li>
            <li>Wind Speed ${json.windSpeed}</li>
            <li>Status ${json.status}</li>
            <li>Chance of Precip ${json.chanceOfPrecipitation}</li>
            <li>Zip Code ${json.zipcode}</li>
            </ul>`;

                if (json.temp > json.tempMin && json.temp < json.tempMax) {
                    div.innerHTML += "Temp nominal <br />";
                    goForLaunch = true;
                    console.log(goForLaunch);
                } else {
                    div.innerHTML += "Temp outside accepted range<br />";
                    goForLaunch = false;
                }

                if (json.windSpeed < 50 && json.windSpeed > 2) {
                    div.innerHTML += "Windspeed nominal<br />";
                    goForLaunch = true;
                } else {
                    div.innerHTML += "Windspeed outside of acceptable range<br />";
                    goForLaunch = false;
                }

                div.innerHTML += `Go For Launch: ${goForLaunch}`;
            });
        })
})


//code to set promises from fetch() and .json()
//.then indicates "do this when the response is received not before."
// const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
// fetchPromise.then( function(response) {
//    const jsonPromise = response.json();
//    jsonPromise.then( function(json) {
//       console.log("temp", json.temp);
//    });
// } );