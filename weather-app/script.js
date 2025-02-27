document.getElementById("getWeather").addEventListener("click", function () {
    let city = document.getElementById("cityInput").value;
    let apiKey = "54ce4082bc4248a5be92c2fe2f519bf2";
    let apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                let weather = data.data[0];
                document.getElementById("weatherOutput").innerHTML = `
                    <h2>${weather.city_name}, ${weather.country_code}</h2>
                    <p>Temperature: ${weather.temp}°C</p>
                    <p>Weather: ${weather.weather.description}</p>
                    <img src="https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png">
                `;
            } else {
                alert("City not found! Please check the spelling.");
            }
        })
        .catch(error => {
            alert("Something went wrong. Please try again later.");
            console.error(error);
        });
});
