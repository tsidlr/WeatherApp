import { Injectable } from '@angular/core';
import { WeatherData } from "./weatherDataFormat"

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  WeatherData: WeatherData = {} as WeatherData;
  currentDate: Date = new Date();

  getWeatherData(city: string) {
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bc2a65563d90c431627a08a6de9ef1f`;
    fetch(link)
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data: any) {
    this.WeatherData = data;

    this.currentDate = new Date();
    this.WeatherData.main.temp = (this.WeatherData.main.temp - 273.15)
    this.WeatherData.name = (this.WeatherData.name);
    this.WeatherData.weather[0].description = (this.WeatherData.weather[0].main);

    // Tutorial https://www.youtube.com/watch?v=vpq2FxNzgd4
  }

}
