function makeCall(name) {
    fetch('http://api.weatherapi.com/v1/current.json?key=c70a004070bf4ddb87793146210609&q='+ name +'&aqi=no')
        .then((response) => response.json())
        .then(function (weatherData) {
            console.log(weatherData);
            userCity.innerText = weatherData.location.name;
            nationLocation.innerText = weatherData.location.country;
            regionLocation.innerText = weatherData.location.region;

            conditionOfCity.innerText = weatherData.current.condition.text;
            tempOfCity.innerText = weatherData.current.temp_c
        })
}

getCityName.addEventListener("click", () => makeCall(document.getElementById("cityName").value) );


