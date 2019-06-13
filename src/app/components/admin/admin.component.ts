import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IExtendedOrders } from '../../interfaces/IOrder';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  extendedOrders: IExtendedOrders[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {    this.service.getOrder().subscribe((orderData) => {


    for (let i = 0; i < orderData.length; i++) {
    this.extendedOrders.push({ order: orderData[i], movieName: []});
    
    let orderRows = orderData[i].orderRows;
    
    for (let j = 0; j < orderRows.length; j++) {
    let productId = orderRows[j].productId;
    
    //console.log('product id from orderrows: ' + productId);
    
    this.service.getSingleMovieData(productId).subscribe((data) => {
    //console.log(data);
    this.extendedOrders[i].movieName.push(data.name);
    
    });
    }
    }
    });
}

}