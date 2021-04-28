import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  currentCar:Car;

  constructor(private carService: CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  setCurrentCar(car:Car){
    this.currentCar= car;
  }
  getCurrentCar(car:Car){
    if(car== this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getCarById(carId:number) {
    this.carService.getCarById(carId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}