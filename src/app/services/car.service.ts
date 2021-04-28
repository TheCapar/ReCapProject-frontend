import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44344/api/';

  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "car/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "car/getcarbyıd?carId=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}