import { Component } from '@angular/core';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent {

  carDetails: CarDetail[] = [];
  dataLoaded = false;
  constructor(private cardetailService: CardetailService) {}

  ngOnInit(): void {
      this.getCars();
  }

  getCars() {
    this.cardetailService.getCarDetails().subscribe(response => {
      this.carDetails = response.data,
      this.dataLoaded = true;
    })
  }
}

