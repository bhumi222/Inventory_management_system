import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private httpclient: HttpClient) { }

  url = 'http://localhost:4000';

  getProduct():Observable<Product[]>{
    return this.httpclient.get<Product[]>(this.url);
  }

  getProductById(id:string):Observable<Product>{
      return this.httpclient.get<Product>(`${this.url}/${id}`);
    }

  addProduct(product:Product):Observable<Product>{
    return this.httpclient.post<Product>(this.url,product);
  }
  deleteProduct(_id:string):Observable<Product>{
    return this.httpclient.delete<Product>(this.url+"/"+_id)
  }
   selectUpdateProduct(_id:string):Observable<Product>{
    return this.httpclient.get<Product>(this.url+"/"+_id);
  }
  updateProduct(product:Product){
    return this.httpclient.put<Product>(this.url+"/"+product._id,product);
  }
}
