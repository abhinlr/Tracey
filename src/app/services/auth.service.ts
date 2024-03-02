import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userObject :{id:string,name:string,email:string,password:string}={
    id:'id1234',
    name: 'John Doe',
    email:'abhijithnileshwar1@gmail.com',
    password:'qwertyuiop'
  }

  constructor() { }

  login(data: any): Observable<any> {
    return of(this.validateLogin(data)).pipe(
      map((user: any) => {
        const userData = { id: user.id, name: user.name, email: user.email};
        return userData;
      })
    );
  }

  validateLogin(data:any){
    if(data.username === this.userObject.email && data.password === this.userObject.password){
      return this.userObject;
    }else{
      return null;
    }
  }
}
