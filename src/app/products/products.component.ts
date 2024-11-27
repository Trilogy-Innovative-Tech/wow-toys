import {Component} from '@angular/core';
import {Product} from "../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {name: 'Preschool & Plush', description: 'Amazing robot!', image: 'assets/img/cat1.jpg'},
    {name: 'Collectibles & Interactive Toys', description: 'Even cooler robot!', image: 'assets/img/cat2.png'},
    {name: 'Robots & Vehicles', description: 'The coolest robot!', image: 'assets/img/cat3.jpg'},
    {name: 'Outdoor & Games', description: 'The coolest robot!', image: 'assets/img/cat4.jpg'}
  ];

  constructor(private router: Router) {
  }


  viewDetails(product: Product) {
    if (product.name === 'Collectibles & Interactive Toys') {
      this.router.navigate(['/collectibles']);

    }
  }
}
