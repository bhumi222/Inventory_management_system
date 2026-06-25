import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../servicess/product.service';
import { Product } from '../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.css'
})
export class AddInventoryComponent {
  products:Product[] = [];
  singlepoduct:Product|undefined;
  savedProduct:Product|undefined;
  selectedProduct : Product|undefined;
  id:any = "";
  username:string| null="";
  isEdit = false;
  
    constructor(private product:ProductService,public route: ActivatedRoute,public router:Router){}
    
    ngOnInit(){
      this.getProduct();
          const productId = this.route.snapshot.paramMap.get('id'); 
    if (productId) {
        this.product.getProductById(productId).subscribe((productdata:Product)=>{
          this.singlepoduct = productdata; 
          console.log(this.singlepoduct);
      });
    }
    }
  
    getProduct(){
      this.product.getProduct
      ().subscribe((data:Product[])=>{
        console.log(data);
        this.products = data;
      })
    }
  
    addProduct(product:Product){
      if(!this.singlepoduct){
      this.product.addProduct(product).subscribe((data:Product)=>{
        console.log(data);
        if(data){
          this.getProduct();
        }
        this.router.navigate(['/home'])
    })
  }
  else{
    const productData = {...product,_id:this.singlepoduct._id}
    this.product.updateProduct(productData).subscribe((data1:Product)=>{
      console.log(data1)
      if(data1){
        this.getProduct();
      }
      this.router.navigate(['/home'])
    })
  }
  }
  
}
