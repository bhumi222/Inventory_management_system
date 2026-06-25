import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  url = 'http://localhost:4000/api/user';

  getUser():Observable<User[]>{
    return this.httpclient.get<User[]>(this.url);
  }


  register(user:User):Observable<User>{
    return this.httpclient.post<User>(`${this.url}/register`,user);
  }

  login(user:User):Observable<User>{
    return this.httpclient.post<User>(`${this.url}/login`,user,{withCredentials:true});
  }

  islogout(){
    return this.httpclient.post(`${this.url}/logout`,{})
  }

  ifloggedin(){
    const data = localStorage.getItem("token");
    if(data!==null ){
      return true;
    }
    else{
      return false;
    }
  }
}
