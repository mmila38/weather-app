import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=cc5e38be616bb500415289b2ad4cf095&query=${location}`
    );
  }
}
