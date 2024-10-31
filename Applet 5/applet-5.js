class WeatherApp {
  constructor() {
      //API Key
      this.apiKey = document.getElementById('apiKeyInput');
      
      //Text Input
      this.cityInput = document.getElementById('cityInput');
      this.getWeatherBtn = document.getElementById('getWeatherBtn');

      //Geolocation Input
      this.getLocationBtn = document.getElementById('getLocationBtn');

      //Weather Card
      this.weatherCard = document.getElementById('weatherCard');
      this.cityName = document.getElementById('cityName');
      this.temperature = document.getElementById('temperature');
      this.description = document.getElementById('description');
      this.humidity = document.getElementById('humidity');
      this.windSpeed = document.getElementById('windSpeed');

      //Event Listener
      this.getWeatherBtn.addEventListener('click', () => this.fetchWeather());
      this.getLocationBtn.addEventListener('click', () => this.fetchWeatherByLocation());
  }


  
  displayWeather(data) {
    this.cityName.textContent = `${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})`;
    this.temperature.textContent = `Temperature: ${data.main.temp} °C`;
    this.description.textContent = `Weather: ${data.weather[0].description}`;
    this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
    this.windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    
    // Set the weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weatherIcon').src = iconUrl;

    this.weatherCard.style.display = 'block';
}}





class WeatherService extends WeatherApp {
  async fetchWeather() {
      const apiKey = this.apiKey.value
      const city = this.cityInput.value;
      if (city) {
          const data = await this.getWeatherData(city,apiKey);
          if (data) {
              this.displayWeather(data,apiKey);
          } else {
              alert('City not found. Please try again.');
          }
      } else {
          alert('Please enter a city name.');
      }
  }
}