import { Component } from '@angular/core';
import { WeatherAPIService } from './weather-api.service';
import { WeatherData } from './weatherDataFormat';



@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})

export class WeatherCardComponent {

  ngOnInit() {
    this.getWeatherData("Arnsberg");
  }

  WeatherData: WeatherData = {} as WeatherData;
  currentDate: Date = {} as Date;
  getWeatherData: any;
  setWeatherData: any;

  constructor(service: WeatherAPIService) {
    this.WeatherData = service.WeatherData;
    this.currentDate = service.currentDate;
    this.getWeatherData = service.getWeatherData;
    this.setWeatherData = service.setWeatherData;
  }

}

