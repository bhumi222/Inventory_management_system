import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../servicess/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  products: Product[] = [];
  username:string|null = "";
  selectedProduct : Product|undefined;

  conversionRates:any = {
     INR: 1,
     USD: 90.57,
     EUR: 105.15,
     GBP: 121.28
  }

  constructor(private product: ProductService,public route: Router,public routes: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
    this.routes.queryParams.subscribe((params)=>{
      this.username = (params['name'])
    })
  }

  getProduct() {
    this.product.getProduct
      ().subscribe((data: Product[]) => {
        console.log(data);
        this.products = data;
      })
  }

  get totalInventoryCost(): number {
  return this.products.reduce((sum, p) => {
    const rate = this.conversionRates[p.currency];
    const priceInINR = p.sellingCost * rate;
    return sum + priceInINR * p.quantityInHand;
  }, 0);
}
  getalert(){
    this.product.getProduct
      ().subscribe((data: Product[]) => {
        console.log(data);
        const lowStockItems = data.filter(item => item.quantityInHand <= 10);
        console.log(lowStockItems)
        this.products = lowStockItems;
      })
  }
  deleteProduct(_id:string){
    this.product.deleteProduct(_id).subscribe((data:Product)=>{
      console.log(data);
      if(data){
        this.getProduct();
      }
    })
    console.log(_id)
  }

   selectUpdateProduct(_id:string){
    this.route.navigate(['/add',_id])
  }
  
}
