import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { User } from '../../interfaces/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  users:User[] = [];

  savedUser: User = {
  username: '',
  email: '',
  password: ''
};
  constructor(private auth:AuthService, public router: Router){}

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.auth.getUser().subscribe((data:User[])=>{
      console.log(data);

      this.users = data;
    })
  }

  addUser(user:User){
    this.auth.register(user).subscribe((data:User)=>{
      //this.router.navigate(['/']);
      console.log(data);
  })
}
}
