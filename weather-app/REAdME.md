# Weather App

A simple web application that allows users to check the current weather of any city using the **Weatherbit API**.

## Features
- Search for weather by city name
- Displays temperature, weather condition, and an icon
- User-friendly and responsive design
- Error handling for invalid inputs

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and responsiveness
- **JavaScript**: API requests and dynamic UI updates
- **Weatherbit API**: Fetching live weather data

## How to Use
1. Open the `index.html` file in a browser.
2. Enter the name of a city in the input box.
3. Click on the **"Get Weather"** button.
4. The app will display the current temperature, weather description, and an icon.

## API Integration
- This app uses the **Weatherbit API**.
- The API request is sent in the format:
  https://api.weatherbit.io/v2.0/current?city=CITY_NAME&key=YOUR_API_KEY
- Replace `YOUR_API_KEY` with your actual API key from [Weatherbit](https://www.weatherbit.io/).

## Project Structure

weather-app/
│── index.html    # Main HTML file
│── style.css     # Stylesheet
│── script.js     # JavaScript logic
│── README.md     # Project documentation




## Future Improvements
- Add a forecast feature
- Support multiple language options
- Allow users to switch between Celsius and Fahrenheit

## License
This project is open-source and free to use under the **MIT License**.



