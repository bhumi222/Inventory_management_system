import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string | null = null;
  userData = {
    email: '',
    password: ''
  }
  constructor(public router: Router, private auth: AuthService) { }
  
  userLogin(user: User) {
    this.auth.login(user).subscribe({
      next: (data: any) => {
        console.log(data);
        localStorage.setItem("token",data.loginToken)
        this.router.navigate(['/home'],{queryParams:{name:data}});
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = "Invalid User Details";
      }
    });
  }
}
