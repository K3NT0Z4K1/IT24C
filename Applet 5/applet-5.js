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
