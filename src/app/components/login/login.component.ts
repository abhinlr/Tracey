import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData:{username:string,password:string}={
    username:'',
    password:''
  }
  constructor(private authService : AuthService,
    private router: Router){}

  loginUser() {
    this.authService.login(this.loginData)
      .subscribe(
        (data) => {
          if(data !=null){
            this.router.navigateByUrl('/');
          }else{
            console.log('error');

          }
        },
        (error) => {
          console.error("Login error:", error);
        }
      );
  }


}
