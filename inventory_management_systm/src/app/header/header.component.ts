import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../servicess/product.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink, FormsModule, RouterLinkActive, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   constructor(public router:Router,private auth:AuthService,private product: ProductService){}
   active = true
   products: Product[] = [];

   ngOnInit() {
     this.getProduct();
   }

   getProduct() {
     this.product.getProduct
       ().subscribe((data: Product[]) => {
         console.log(data);
         this.products = data;
       })
   }

// //   searchfunc = (product:any, searchtext:any) => {
// //   return product.filter(product => product.cat.toLowerCase().includes(searchtext)
// //   );
// // };

// //   searchData(e:any){
// //     const filtered = this.searchfunc(this.products, e.target.value.toLowerCase().trim());
// //     // prod(filtered);
// //   }

  userlogout(){
    this.auth.islogout().subscribe({
      next:()=>{
        console.log("logged out successfully");
        localStorage.removeItem("token");
        this.router.navigate(['/']);
      },
      error:()=>{
        console.log("logout unsuccessful");
        localStorage.removeItem("token");
        this.router.navigate(['/']);
      }
    })
  }

searchData(){}
  }
