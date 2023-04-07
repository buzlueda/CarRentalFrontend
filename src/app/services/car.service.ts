import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7003/api/cars/getall'
  constructor(private httpClient : HttpClient) { }

 getCars():Observable<CarResponseModel>{
  return this.httpClient.get<CarResponseModel>(this.apiUrl)
 }
}
