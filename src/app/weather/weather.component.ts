import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  ngOnInit(): void { }

  sendToAPIXU(formValues: { location: string; }) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

  convertToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }
}
